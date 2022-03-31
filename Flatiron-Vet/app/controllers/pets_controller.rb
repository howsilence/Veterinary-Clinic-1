class PetsController < ApplicationController

    def index
        if params[:user_id]
            user = find_user
            pets = user.pets
        else
            pets = Pet.all
        end
          render json: pets, include: :user, status: :ok
    end
    

    def show
        pet = find_pet
        render json: pet, status: :ok
    end

    def create
        user = find_user
        pet = user.pets.create!(pet_params)
        render json: pet, status: :created
    end

    private
    
    def pet_params
        params.permit(:id, :name, :species, :breed, :age, :weight, :fixed)
    end

    def find_user
        User.find(params[:user_id])
    end


    def find_pet
        Pet.find(params[:id])
    end

    
    
end
