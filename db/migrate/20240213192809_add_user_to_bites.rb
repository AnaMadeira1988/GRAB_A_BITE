class AddUserToBites < ActiveRecord::Migration[7.1]
  def change
    add_reference :bites, :user, null: false, foreign_key: true
  end
end
