class Api::V1::WinesController < ApplicationController

    def index
        wines = Wine.all
        render json: wines
    end

    def create
        # binding.pry
        if Wine.find_by(:name => wine_params[:name])
            wine = Wine.find_by(:name => wine_params[:name])
            binding.pry
            redirect_to "/api/v1/wines/#{wine.id}"
        else
            wine = Wine.create(wine_params)
            render json: wine
        end
    end

    def show
        wine = Wine.find_by(:id => params[:id].to_i)
        render json: wine
    end

    private 
        def wine_params
            params.require(:wine).permit(:name, :color, :grape, :image_url)
        end
end