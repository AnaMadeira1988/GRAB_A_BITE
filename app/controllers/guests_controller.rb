class GuestsController < ApplicationController
  def destroy
    @guest = Guest.find(params[:id])
    @guest.destroy
    redirect_to bite_path(@guest.bite), notice: "Booking has been successfully cancelled"
  end
end
