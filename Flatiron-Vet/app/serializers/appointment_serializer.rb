class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :doctor, :day, :month, :time, :duration
end
