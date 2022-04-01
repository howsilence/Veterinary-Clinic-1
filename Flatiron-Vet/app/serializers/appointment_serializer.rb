class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :doctor, :day, :month, :time, :duration, :pet_id
  belongs_to :pet
end
