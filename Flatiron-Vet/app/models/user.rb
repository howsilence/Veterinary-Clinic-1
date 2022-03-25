class User < ApplicationRecord
    has_many :pets 
    has_many :appointments, through: :pets 

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    

    has_secure_password
end
