class Review < ApplicationRecord
  belongs_to :user
  belongs_to :guest

  validates_presence_of :content
  validates_length_of :content, minimum: 4, maximum: 288
end
