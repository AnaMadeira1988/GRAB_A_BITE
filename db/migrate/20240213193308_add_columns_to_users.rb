class AddColumnsToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :gender, :string
    add_column :users, :pronouns, :string
    add_column :users, :birth_date, :date
    add_column :users, :nationality, :string
    add_column :users, :address, :text
    add_column :users, :languages, :string
    add_column :users, :phone_number, :string
    add_column :users, :description, :text
  end
end
