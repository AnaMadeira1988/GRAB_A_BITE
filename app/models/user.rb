class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # has_many :bites, dependent: :destroy
  # has_many :reviews, dependent: :destroy
  # has_many :guests
  # validates_presence_of :first_name, :last_name, :address, :phone_number, :birth_date, :gender, :languages
  # validates_uniqueness_of :phone_number
end
