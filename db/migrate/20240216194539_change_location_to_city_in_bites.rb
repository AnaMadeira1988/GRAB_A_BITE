class ChangeLocationToCityInBites < ActiveRecord::Migration[7.1]
  def change
    change_table :bites do |t|
      t.rename :location, :city
      t.change :city, :string
    end
  end
end
