class UsersController < ApplicationController

    # skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        # user = User.find(session[:id])
        # render json: user, status: :ok
        render json: @current_user
    end

    def index
        users = User.all
        render json: users, status: :ok
    end

    private

    def user_params
        params.permit(:username, :id, :email, :password, :password_confirmation, :first_name, :last_name)
    end

    def find_user
        User.find(params[:id])
    end

    # def current_user
    #     User.find(session[:id])
    # end
end
