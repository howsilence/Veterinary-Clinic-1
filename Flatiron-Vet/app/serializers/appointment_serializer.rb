class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :doctor, :day, :month, :time, :duration, :with
  has_many :pets
  has_many :users
end
