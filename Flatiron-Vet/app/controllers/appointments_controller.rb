class AppointmentsController < ApplicationController
   
   
    # def index
    #     if params[:user_id]
    #         user = find_user
    #        appointments = user.appointments
    #     else
    #         appointments = Appointment.all
    #     end
    #       render json: appointments, status: :ok
    # end

    # def show
    #     appointment = find_appointment
    #     render json: appointment, status: :ok
    # end

    # def create
    #     user = find_user
    #     appointment = user.appointments.create!(appointment_params)
    #     render json: appointment, status: :created
    # end

    # private
    
    # def appointment_params
    #     params.permit(:id, :doctor, :day, :month, :time, :duration)
    # end

    # def find_user
    #     User.find(session[:user_id])
    # end


    # def find_appointment
    #     Appointment.find(params[:id])
    # end

end
