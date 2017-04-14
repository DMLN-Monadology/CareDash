class DoctorsController < ApplicationController

  def index
    @doctors = Doctor.all
    render "api/doctors/index"
  end

  def show
    @doctor = Doctor.find(params[:id])
    render "api/doctors/show"
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      render "api/doctors/show"
    else
      render(json: ["Invalid title"], status: 401)
    end
  end

  def update
    @doctor = Doctor.find(params[:id])
    if @doctor.update(doctor_params)
      render "api/doctors/show"
    else
      render(json: ["invalid values"], status: 401)
    end
  end

  def destroy
    @doctor = Doctor.find(params[:id])

    if @doctor.destroy
      render "api/doctors/index"
    else
      render json: @doctor.errors.full_messages, status: 422
    end
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :email, :password)
  end

end
