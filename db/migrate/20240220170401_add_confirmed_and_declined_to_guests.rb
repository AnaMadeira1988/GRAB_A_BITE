class AddConfirmedAndDeclinedToGuests < ActiveRecord::Migration[7.1]
  def change
    add_column :guests, :confirmed, :boolean
  end
end
