class CreateBites < ActiveRecord::Migration[7.1]
  def change
    create_table :bites do |t|
      t.date :date
      t.text :dietary_options
      t.float :price
      t.string :meal_type
      t.boolean :local_drinks
      t.boolean :dessert
      t.integer :number_of_guests
      t.text :local_experience
      t.text :location
      t.text :address
      t.text :accessibility

      t.timestamps
    end
  end
end
