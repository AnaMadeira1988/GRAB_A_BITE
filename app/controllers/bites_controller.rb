class BitesController < ApplicationController
  before_action :set_bite, only: %i[ edit update destroy]
  skip_before_action :authenticate_user!, only: :index

  def index
    @bites = Bite.all.sort_by(&:date)
  end

  def new
    @bite = Bite.new

    if params[:date_start].present? && params[:date_end].present?
      @bites = @bites.where('date BETWEEN ? AND ?', params[:date_start],params[:date_end])
    end

    if params[:dietary_options].present?
      @bites = @bites.where(dietary_options: params[:dietary_options])
    end

    if params[:price].present?
      @bites = @bites.where(price: params[:price])
    end

    if params[:meal_type].present?
      @bites = @bites.where(meal_type: params[:meal_type])
    end

    if params[:local_drinks].present?
      @bites = @bites.where(local_drinks: params[:local_drinks] == '1')
    end

    if params[:dessert].present?
      @bites = @bites.where(dessert: params[:dessert] == '1')
    end

    if params[:number_of_guests].present?
      @bites = @bites.where(number_of_guests: params[:number_of_guests])
    end

    if params[:city].present?
      @bites = @bites.where(city: params[:city])
    end

    # if params[:host].present?
    #   @bites = User.where(first_name: params[:host]).bites
    # end


  end

  def create
    @bite = Bite.new(bite_params.merge(user: current_user))

    if @bite.save!
      redirect_to root_path, notice: 'Bite was successfully created.'
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
      redirect_to root_path, notice: 'Bite was successfully booked.'
    else
      redirect_to root_path, alert: 'Bite could not be booked.'
    end
  end

  private

  def bite_params
    params.require(:bite).permit(:name, :date,
                                 :price, :meal_type, :local_drinks, :dessert, :number_of_guests,
                                 :local_experience, :city, :address, dietary_options: [], accessibility: [])
  end

  def set_bite
    @bite = Bite.find(params[:id])
  end
end
