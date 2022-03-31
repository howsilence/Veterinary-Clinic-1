class Pet < ApplicationRecord
  belongs_to :user
  belongs_to :appointment
  



    validates :name, presence: true, uniqueness: true
    validates :species, presence: true
    validates :breed, presence: true
    validates :age, presence: true
    validates :weight, presence: true

end
