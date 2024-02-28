class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    unless @user.reviews.empty?
      attributes = %i[experience cleanliness food location accessibility]
      attributes.each do |attr|
        values = @user.reviews.map(&attr).compact
        instance_variable_set("@#{attr}_avg", values.sum / values.length) unless values.empty?
      end
    end
    @age = Time.now.year - @user.birth_date.year if @user.birth_date

    @languages = @user.languages.split.join(', ') if @user.languages.present? && !@user.languages.empty?
    @hosted = Bite.where(user_id: @user.id).joins(:guest).where(guests: { confirmed: true })
                  .select { |bite| bite.date < Date.today }.length
    @guested = Guest.where(user_id: @user.id, confirmed: true)
                    .select { |guest| guest.bite.date < Date.today }.length
    @reviewed = Review.where(user_id: @user.id).length
    @reviews = Review.where(user_id: @user.id)
  end
end
