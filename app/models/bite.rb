class Bite < ApplicationRecord
  belongs_to :user

  # validates_presence_of :date, :number_of_guests, :location, :address, :price, :accessibility
end
