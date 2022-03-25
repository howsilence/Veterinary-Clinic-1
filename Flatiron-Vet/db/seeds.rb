puts "Seeding Users..."

u1 = User.create(first_name: "Steve", last_name: "Tatton", email: "statton0104@gmail.com",username: "Steve1",password: "123",password_confirmation: "123")

u2 = User.create(first_name: "Nathalia", last_name: "Troina", email: "Nathalia@gmail.com",username: "Nat1",password: "321",password_confirmation: "321")

puts "Seeding Complete!!!"