class BitesController < ApplicationController
  skip_before_action :authenticate_user!, only: :index

  def index
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

  private

  def bite_params
    params.require(:bite).permit(:name, :date, :dietary_options,
                                 :price, :meal_type, :local_drinks, :dessert, :number_of_guests,
                                 :local_experience, :location, :address, :accessibility)
  end
end
