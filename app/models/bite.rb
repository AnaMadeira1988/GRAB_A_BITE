class Bite < ApplicationRecord
  belongs_to :user
  has_one :guest, dependent: :destroy

  validates_presence_of :name, :date, :number_of_guests, :city, :address, :price
  validates_length_of :name, minimum: 3, maximum: 40

  validates_numericality_of :number_of_guests, greater_than_or_equal_to: 1
  validates_numericality_of :price, greater_than: 0

  validate :date_must_be_in_future

  private

  def date_must_be_in_future
    errors.add(:date, "must start from the next day") if date.present? && date < Date.tomorrow
  end
end
