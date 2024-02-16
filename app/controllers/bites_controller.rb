class BitesController < ApplicationController
  before_action :set_bite, only: %i[edit update]
  skip_before_action :authenticate_user!, only: :index

  def index
    @bites = Bite.all
  end

  def new
    @bite = Bite.new
  end

  def create
    @bite = Bite.new(bite_params)
    @bite.user = current_user
    if @bite.save
      redirect_to root_path, notice: 'Bite was successfully created.'
    else
      render :new, status: :unprocessable_entity
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

  private

  def bite_params
    params.require(:bite).permit(:name, :date, :dietary_options,
                                 :price, :meal_type, :local_drinks, :dessert, :number_of_guests,
                                 :local_experience, :city, :address, :accessibility)
  end

  def set_bite
    @bite = Bite.find(params[:id])
  end
end
