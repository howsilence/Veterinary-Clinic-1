class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :breed, :age, :weight, :fixed
  has_many :appointments
  has_one :user_id
  
end
