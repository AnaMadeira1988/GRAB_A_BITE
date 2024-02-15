class AddNameToBites < ActiveRecord::Migration[7.1]
  def change
    add_column :bites, :name, :string
  end
end
