class UsersController < ApplicationController

    # skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        user = find_user
        render json: user, status: :ok
        # render json: @current_user

    end

    private

    def user_params
        params.permit(:username, :id, :email, :password, :password_confirmation, :first_name, :last_name)
    end

    def find_user
        User.find(params[:id])
    end
end
