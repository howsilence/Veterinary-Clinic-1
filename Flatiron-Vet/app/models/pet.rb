class Pet < ApplicationRecord
  has_many :appointments
  belongs_to :user
  
  



    validates :name, presence: true, uniqueness: true
    validates :species, presence: true
    validates :breed, presence: true
    validates :age, presence: true
    validates :weight, presence: true

end
