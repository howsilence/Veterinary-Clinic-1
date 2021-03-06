class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username
  has_many :pets
  has_many :appointments
end
