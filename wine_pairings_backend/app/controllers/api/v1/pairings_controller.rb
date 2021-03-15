class Api::V1::PairingsController < ApplicationController

    def index
        @pairings = Pairing.all
        render json: @pairings
    end

    def create
        @pairing = Pairing.create(pairing_params)
        render json: @pairing
    end

    def destroy
        @pairing = Pairing.find_by(id: params[:id]).destroy
        render json: @pairing
    end

    private

        def pairing_params
            params.require(:pairing).permit(:food_name, :description, :wine_id)
        end


end