# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Bite.destroy_all
puts "Destroying old bites..."

puts "Creating bites..."
User.all.each do |user|
  4.times do
    bite_params = {name: Faker::Food.dish,
                    date: Faker::Date.between(from: Date.today + 1, to: 2.weeks.from_now),
                    dietary_options: ['vegan', 'vegetarian', 'low_carb','halal', 'gluten_free', 'keto', 'lactose_free', 'kosher'].sample(3).join(' '),
                    price: rand(5.2...29.99).round(2),
                    meal_type: ['Breakfast', 'Lunch', 'Brunch', 'Dinner', 'Dessert', 'Snack', 'Drinks', 'Other'].sample,
                    local_drinks: Faker::Boolean.boolean,
                    dessert: Faker::Boolean.boolean,
                    number_of_guests: rand(1..10),
                    local_experience: Faker::Lorem.paragraph(sentence_count:4),
                    city: Faker::Address.city,
                    address: Faker::Address.street_address,
                    accessibility: ['elevator', 'ramp', 'ground_floor'].sample(2).join(' ')
                  }
    puts "#{user.first_name} #{user.last_name} created a yummy bite!"
    Bite.create!(bite_params.merge(user: user))
  end
end
puts "Seeds created!"
