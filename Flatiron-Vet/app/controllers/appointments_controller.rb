class AppointmentsController < ApplicationController

    def index

    end

    def create
        user = find_user
        pet = user.pets.create!(pet_params)
        render json: pet, status: :created
    end

    def destroy
        
    end
end
