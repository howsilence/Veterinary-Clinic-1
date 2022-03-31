puts "Seeding Users..."

u1 = User.create(first_name: "Steve", last_name: "Tatton", email: "statton0104@gmail.com",username: "Steve1",password: "123",password_confirmation: "123")

u2 = User.create(first_name: "Nathalia", last_name: "Troina", email: "Nathalia@gmail.com",username: "Nat1",password: "321",password_confirmation: "321")

#######################################
#######################################
puts "Seeding Pets..."

p1 = Pet.create(name: "Pancake", age: 1, weight: 39.8, species: "Dog", breed: "Mutt", fixed: true, user_id: u1.id)

p2 = Pet.create(name: "Rusty", age: 40, weight: 46, species: "Dog", breed: "Collie", fixed: true, user_id: u1.id)

Pet.create(name: "Waffles", age: 3, weight: 39.8, species: "Cat", breed: "Tabby", fixed: true, user_id: u2.id)

Pet.create(name: "Toast", age: 6, weight: 5558, species: "Giraffe", breed: "African-Giraffe", fixed: false, user_id: u2.id)

Pet.create(name: "Charlie", age: 9, weight: 24, species: "Dog", breed: "King Charles Cavalier", fixed: true, user_id: u1.id)

Pet.create(name: "Beans", age: 12, weight: 59.8, species: "Bird", breed: "Parrot", fixed: true, user_id: u2.id)
#######################################
#######################################
puts "Seeding Veterinarians..."

v1 = Veterinarian.create(name: "Dr. Otto Octavius", specialty: "Bio-mechanical Engineering", booked_at:)

v2 = Veterinarian.create(name: "Dr. Curt Connors", specialty: "Biology", booked_at:)

v3 = Veterinarian.create(name: "Dr. Stephen Strange", specialty: "Emergency Trauma Surgery", booked_at:)

#######################################
#######################################
puts "Seeding Appointments..."

Appointment.create(booked_at: ,duration: , pet_id: , veterinarian_id:)







#######################################
#######################################
puts "Seeding Complete!!!"

