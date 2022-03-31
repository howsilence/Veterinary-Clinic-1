class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :doctor, :start_time, :end_time, :duration
  has_many :pets
  has_many :users
end
