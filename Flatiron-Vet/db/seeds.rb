puts "Seeding Users..."

u1 = User.create(first_name: "Steve", last_name: "Tatton", email: "statton0104@gmail.com",username: "Steve1",password: "123",password_confirmation: "123")

u2 = User.create(first_name: "Nathalia", last_name: "Troina", email: "Nathalia@gmail.com",username: "Nat1",password: "321",password_confirmation: "321")



#######################################
#######################################
puts "Seeding Pets..."

p1 = Pet.create(name: "Pancake", age: 1, weight: 39.8, species: "Dog", breed: "Mutt", fixed: true, user_id: u1.id)

p2 = Pet.create(name: "Rusty", age: 40, weight: 46, species: "Dog", breed: "Collie", fixed: true, user_id: u1.id)

p3 = Pet.create(name: "Waffles", age: 3, weight: 39.8, species: "Cat", breed: "Tabby", fixed: true, user_id: u2.id)

p4 = Pet.create(name: "Toast", age: 6, weight: 5558, species: "Giraffe", breed: "African-Giraffe", fixed: false, user_id: u2.id)

p5 = Pet.create(name: "Charlie", age: 9, weight: 24, species: "Dog", breed: "King Charles Cavalier", fixed: true, user_id: u1.id)

p6 = Pet.create(name: "Beans", age: 12, weight: 59.8, species: "Bird", breed: "Parrot", fixed: true, user_id: u2.id)






#######################################
#######################################
puts "Seeding Appointments..."

#####datetime = DateTime.civil(2007, 12, 4, 0, 0, 0, 0)   # => Tue, 04 Dec 2007 00:00:00 +0000

a1 = Appointment.create(doctor: "Dr. Ava",day: 12, month: 4, time:"11:00am", duration: "45 mins", pet_id: p1.id)

a2 = Appointment.create(doctor: "Dr. Elijah",day: 16, month: 8, time:"1:00pm", duration: "45 mins", pet_id: p2.id)

a3 = Appointment.create(doctor: "Dr. Curt Conners",day: 3, month: 6, time:"11:00am", duration: "45 mins", pet_id: p3.id)

a4 = Appointment.create(doctor: "Dr. Stephen Strange",day: 12, month: 4, time:"11:00am", duration: "45 mins", pet_id: p4.id)

a5 = Appointment.create(doctor: "Dr. Otto Octavius",day: 4, month: 6, time:"10:00am", duration: "45 mins", pet_id: p5.id)

a6 = Appointment.create(doctor: "Dr. Stephen Strange",day: 22, month: 4, time:"10:00am", duration: "45 mins", pet_id: p6.id)

#######################################
#######################################
puts "Seeding Complete!!!"

