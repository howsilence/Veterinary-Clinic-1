class PetSerializer < ActiveModel::Serializer
  attributes :id, :belongs_to, :name, :age, :weight, :fixed
