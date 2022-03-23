class User < ApplicationRecord
    has_many :pets 
    has_many :appointments, through: :pets 
end
