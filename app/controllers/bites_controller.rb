class BitesController < ApplicationController
  before_action :set_bite, only: %i[show edit update destroy]
  skip_before_action :authenticate_user!, only: :index

  def index
    @bites = Bite.where('date >= ?', Date.today)

    @bites = filter(@bites, params)
  end

  def dashboard
    @bites_all = Bite.all

    @my_bites = Bite.where(user: current_user)

    @open_bites = @my_bites.select { |bite| bite.guest.nil? }

    @booked_bites = @my_bites.select { |bite| bite.guest.present? && bite.guest.confirmed == true }

    @pending_bites = @my_bites.select { |bite| bite.guest.present? && bite.guest.confirmed.nil? }
  end

  def show
    accessing_user = current_user == @bite.user || (@bite.guest && current_user == @bite.guest.user) || @bite.guest.nil?
    @guest = @bite.guest if @bite.guest
    redirect_to root_path, alert: 'Bite not found' unless accessing_user
  end

  def new
    @bite = Bite.new
  end

  def create
    modified_params = bite_params.merge(user: current_user)
    modified_params[:dietary_options] = modified_params[:dietary_options].reject(&:empty?).map { |str| "##{str}".delete(' ') }.join(' ')
    modified_params[:accessibility] = modified_params[:accessibility].reject(&:empty?).map { |str| "##{str}".delete(' ') }.join(' ')

    @bite = Bite.new(modified_params)

    if @bite.save!
      redirect_to @bite, notice: 'Bite was successfully created.'
    else
      render :new, status: 422
    end
  end

  def edit; end

  def update
    if @bite.update(bite_params)
      redirect_to root_path, notice: 'Bite was successfully updated.'
    else
      render :edit, status: 422
    end
  end

  def destroy
    @bite.destroy
    redirect_to root_path, notice: "Bite has been successfully deleted."
  end

  def book
    @bite = Bite.find(params[:id])
    return if @bite.user == current_user

    @guest = Guest.new(user: current_user, bite: @bite)

    if @guest.save
      redirect_to @bite, notice: 'Bite was successfully booked. Pending confirmation from host.'
    else
      redirect_to root_path, alert: 'Bite could not be booked.'
    end
  end

  private

  def bite_params
    params.require(:bite).permit( :name, :date,
                                  :price, :meal_type, :local_drinks, :dessert, :number_of_guests,
                                  :local_experience, :city, :address, dietary_options: [], accessibility: [],
                                  photos: [])
  end

  def set_bite
    @bite = Bite.find(params[:id])
  end

  def filter(bites, params)
    bites = bites.where(city: params[:city]) if params[:city].present?
    bites = bites.where('date >= ?', params[:date_start]) if params[:date_start].present?
    bites = bites.where('date <= ?', params[:date_end]) if params[:date_end].present?
    bites = bites.where('price >= ?', params[:price_min]) if params[:price_min].present?
    bites = bites.where('price <= ?', params[:price_max]) if params[:price_max].present?
    bites = bites.where(meal_type: params[:meal_type]) if params[:meal_type].present?
    bites = bites.where('number_of_guests >= ?', params[:number_of_guests]) if params[:number_of_guests].present?
    bites = bites.where("dietary_options LIKE ?", "%#{params[:dietary_options]}%") if params[:dietary_options].present?
    bites = bites.where("accessibility LIKE ?", "%#{params[:accessibility]}%") if params[:accessibility].present?
    bites = bites.where(dessert: params[:dessert]) if params[:dessert].present?
    bites = bites.where(local_drinks: params[:local_drinks]) if params[:local_drinks].present?
    if params[:host].present?
      host = User.find_by(first_name: params[:host])
      bites = bites.where(user_id: host.id) if host
    end
    bites.order(:date)
  end
end
