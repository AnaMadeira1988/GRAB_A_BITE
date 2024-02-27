class AddFavouritesToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :favourites, :integer, array: true, default: []
  end
end
