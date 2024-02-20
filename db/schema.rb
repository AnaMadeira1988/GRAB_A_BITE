# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_20_170401) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bites", force: :cascade do |t|
    t.date "date"
    t.text "dietary_options"
    t.float "price"
    t.string "meal_type"
    t.boolean "local_drinks"
    t.boolean "dessert"
    t.integer "number_of_guests"
    t.text "local_experience"
    t.string "city"
    t.text "address"
    t.text "accessibility"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.string "name"
    t.index ["user_id"], name: "index_bites_on_user_id"
  end

  create_table "guests", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "bite_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "confirmed"
    t.index ["bite_id"], name: "index_guests_on_bite_id"
    t.index ["user_id"], name: "index_guests_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.date "date"
    t.text "content"
    t.integer "cleanliness"
    t.integer "food"
    t.integer "experience"
    t.integer "location"
    t.integer "accessibility"
    t.bigint "user_id", null: false
    t.bigint "guest_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_reviews_on_guest_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.string "pronouns"
    t.date "birth_date"
    t.string "nationality"
    t.text "address"
    t.string "languages"
    t.string "phone_number"
    t.text "description"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "bites", "users"
  add_foreign_key "guests", "bites"
  add_foreign_key "guests", "users"
  add_foreign_key "reviews", "guests"
  add_foreign_key "reviews", "users"
end
