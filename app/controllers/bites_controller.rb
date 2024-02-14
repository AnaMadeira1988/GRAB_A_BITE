class BitesController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  #def new
    #@bite = current_user.bites.new
  #end
  def index
  end

  def new
    @bite = Bite.new
  end

  # def create
  #   @bite = Bite.new(bite_params)
  #   @bite.user = current_user
  # end
end
