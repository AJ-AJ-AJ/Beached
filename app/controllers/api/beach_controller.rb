class Api::BeachController < ApplicationController
    def index
        @beaches = Beach.all
        render json: @beaches
    end

    def show
        @beach = Beach.find(params[:id])
        render json: @beach
    end

    def create
        @beach = Beach.create(beach_params)
        render json: @beach
    end

    def update
        @beach = Beach.find(params[:id])
        @beach.update!(beach_params)
    
        render json: @beach
      end
    
      def destroy
        @beach = Beach.find(params[:id]).delete
    
        render status: :ok
      end

    private
    def beach_params
        params.require(:beach).permit(:name, :image)
    end
end

end
