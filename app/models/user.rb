class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :bites, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :guests, dependent: :destroy
  has_one_attached :photo

  validates_presence_of :first_name, :last_name, :phone_number
  validates :phone_number, uniqueness: true, format: { with: /\A[0-9]{8,}\z/, message: "Please enter a valid phone number" }
end
