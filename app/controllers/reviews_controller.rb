class ReviewsController < ApplicationController
  def create
    @guest = Guest.find(params[:guest_id])
    @the_guest = @guest.user
    @the_host = @guest.bite.user
    @bite = @guest.bite
    if current_user == @the_guest
      @review = Review.new(review_params.merge(user: @the_host, guest: @guest))
    else
      @review = Review.new(review_params.merge(user: @the_guest, guest: @guest))
    end
    if @review.save
      redirect_to user_path(@review.user), notice: 'Review was successfully created.'
    else
      render 'bites/show', status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:content, :cleanliness, :food, :experience, :location, :accessibility)
  end
end
