puts "🌱 Seeding spices..."

# Seed your database here
puts "Seeding user(s)..."
max = User.create(user_name: "max", password: "123")

puts "Seeding path(s)..."
Path.create(
    destination: "Work", 
    starting_location: "Home",
    round_trip: false,
    distance_between: 15,
    user_id: max.id
)

Path.create(
    destination: "Gym", 
    starting_location: "Work",
    round_trip: false,
    distance_between: 12,
    user_id: max.id
)

Path.create(
    destination: "Home", 
    starting_location: "Gym",
    round_trip: false,
    distance_between: 15,
    user_id: max.id
)


puts "✅ Done seeding!"
