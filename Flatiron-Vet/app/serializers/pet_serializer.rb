class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :breed, :age, :weight, :fixed
  has_one :user_id
  has_one :appointment_id
end
