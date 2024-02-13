class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.date :date
      t.text :content
      t.integer :cleanliness
      t.integer :food
      t.integer :experience
      t.integer :location
      t.integer :accessibility
      t.references :user, null: false, foreign_key: true
      t.references :guest, null: false, foreign_key: true

      t.timestamps
    end
  end
end
