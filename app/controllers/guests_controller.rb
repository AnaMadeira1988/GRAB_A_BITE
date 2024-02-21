class GuestsController < ApplicationController
  before_action :set_guest, only: %i[update destroy]

  def update
    @guest = Guest.find(params[:id])
    @guest.update(confirmed: true)
    redirect_to bite_path(@guest.bite), notice: "Booking has been successfully confirmed"
  end

  def destroy
    @guest = Guest.find(params[:id])
    @guest.destroy
    redirect_to bite_path(@guest.bite), notice: "Booking has been successfully cancelled"
  end

  private

  def set_guest
    @guest = Guest.find(params[:id])
  end
end
