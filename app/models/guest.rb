class Guest < ApplicationRecord
  belongs_to :user
  belongs_to :bite
  has_many :reviews, dependent: :destroy
  validates :user, :bite, presence: true
  validates :user, uniqueness: { scope: :bite, message: "You can't book the same bite twice" }
  validate :user_cannot_book_own_bite

  private

  def user_cannot_book_own_bite
    errors.add(:user, "You can't book your own bite") if user == bite.user
  end
end
