class Bite < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, :date, :number_of_guests, :location, :address, :price, :accessibility
  validates_numericality_of :number_of_guests, greater_than_or_equal_to: 1
  validates_numericality_of :price, greater_than: 0
end
