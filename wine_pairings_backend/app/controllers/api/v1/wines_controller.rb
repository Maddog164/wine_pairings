class Api::V1::WinesController < ApplicationController

    def index
        wines = Wine.all
        render json: wines
    end

    def create
        binding.pry
        wine = Wine.create(wine_params)
        render json: wine
        binding.pry
    end

    private 
        def wine_params
            params.require(:wine).permit(:name, :color, :grape, :image_url)
        end
end