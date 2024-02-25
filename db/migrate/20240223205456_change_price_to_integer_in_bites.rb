class ChangePriceToIntegerInBites < ActiveRecord::Migration[7.1]
  def change
    change_column :bites, :price, :integer
  end
end
