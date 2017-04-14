class ReviewsController < ApplicationController


  def index
    @reviews = Review.all
    render "api/reviews/index"
  end

  def show
    @review = Review.find(params[:id])
    render "api/reviews/show"
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      @doctor = @review.doctor
      render "api/doctors/show"
    else
      render(json: ["Invalid inputs"], status: 401)
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      @doctor = @review.doctor
      render "api/doctors/show"
    else
      render(json: ["Invalid inputs"], status: 401)
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.destroy
      @doctor = @review.doctor
      render "api/doctors/show"
    else
      render(json: ["Invalid deletion"], status: 401)
    end
  end

  private

  def review_params
    params.require(:review).permit(:description, :doctor_id)
  end



end
