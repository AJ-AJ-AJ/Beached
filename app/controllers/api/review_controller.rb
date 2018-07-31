class Api::ReviewController < ApplicationController
    def index
        @reviews = Beach.find(params[:beach_id]).reviews
        render json: @reviews
    end

    def show
        @review = Review.find(params[:id])
        render json: @review
    end

    def create
        @beach = Beach.find(params[:beach_id])
        @review = @Beach.reviews.create(review_params)
        render json: @review
    end

    def update
        @review = Review.find(params[:id])
        @review.update(review_params)
        render json: @review
    end

    def destroy
        @review = Review.find(params[:id]).destroy
        render status: :ok
    end

private

def review_params
    params.require(:review).permit(:title, :description)
end

end
