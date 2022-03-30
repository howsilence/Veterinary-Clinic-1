class PetsController < ApplicationController

    def index
        render json: Pet.all, status: :ok
    end

    def show
        pet = Pet.find(id: params[:id])
        render json: pet, status: :ok
    end

    def create
        user = find_user
        pet = user.pets.create!(pet_params)
        render json: pet, status: :created
    end

    private
    def pet_params
        params.permit(:id, :name, :species, :breed, :age, :weight:, :fixed)
    end

    def find_user
        User.find(session[:user_id])
      end
end
