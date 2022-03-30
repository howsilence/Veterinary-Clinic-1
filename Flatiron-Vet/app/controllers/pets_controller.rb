class PetsController < ApplicationController

    def index
        render json: Pet.all, status: :ok
    end

    def show
        pet = Pet.find
        render json: pet, status: :ok
    end
end
