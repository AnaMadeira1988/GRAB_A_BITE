class Review < ApplicationRecord
  belongs_to :user
  belongs_to :guest

  # validates_presence_of :date, :content
  # validates_length_of :content, minimum: 4
end
