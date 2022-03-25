class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # before_action :authorize
  # skip_before_action :hello_world

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  private

  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end


  def render_not_found(error)
    render json: { error: "#{model.errors} not found" }, status: :not_found
  end

  # def authorize
  #   @current_user = User.find_by(id: session[:user_id])

  #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  # end


end
