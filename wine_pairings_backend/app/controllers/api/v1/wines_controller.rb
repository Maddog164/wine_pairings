class Api::V1::WinesController < ApplicationController

    def index
        @wines = Wine.all
        # render json: wines
        render json: WineSerializer.new(@wines).to_serialized_json
    end

    def create
        # binding.pry
        if Wine.find_by(:name => wine_params[:name])
            @wine = Wine.find_by(:name => wine_params[:name])
            # pairings = self.pairings
            render json: WineSerializer.new(@wine).to_serialized_json
        else
            @wine = Wine.create(wine_params)
            # render json: wine
            render json: WineSerializer.new(@wine).to_serialized_json
        end
    end

    def show
        @wine = Wine.find_by(:id => params[:id].to_i)
        render json: WineSerializer.new(@wine).to_serialized_json
    end

    private 
        def wine_params
            params.require(:wine).permit(:name, :color, :grape, :image_url)
        end
end