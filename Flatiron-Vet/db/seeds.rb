puts "Seeding Users..."

u1 = User.create(first_name: "Steve", last_name: "Tatton", email: "statton0104@gmail.com",username: "Steve1",password: "123",password_confirmation: "123")

u2 = User.create(first_name: "Nathalia", last_name: "Troina", email: "Nathalia@gmail.com",username: "Nat1",password: "321",password_confirmation: "321")

#######################################
#######################################
puts "Seeding Pets..."

p1 = Pet.create(belongs_to: u1, name: "Pancake", age: 1, weight: 39.8, species: "Dog", breed: "Mutt", fixed: true)

p2 = Pet.create(belongs_to: u1, name: "Rusty", age: 40, weight: 46, species: "Dog", breed: "Collie", fixed: true)

p3 = Pet.create(belongs_to: u2, name: "Waffles", age: 3, weight: 39.8, species: "Cat", breed: "Tabby", fixed: true)

p4 = Pet.create(belongs_to: u2, name: "Toast", age: 6, weight: 5558, species: "Giraffe", breed: "African-Giraffe", fixed: false)

p5 = Pet.create(belongs_to: u1, name: "Charlie", age: 9, weight: 24, species: "Dog", breed: "King Charles Cavalier", fixed: true)

p6 = Pet.create(belongs_to: u2, name: "Beans", age: 12, weight: 59.8, species: "Bird", breed: "Parrot", fixed: true)

#######################################
#######################################
puts "Seeding Complete!!!"

