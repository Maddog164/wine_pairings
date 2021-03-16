class Api::V1::PairingsController < ApplicationController

    def index
        @pairings = Pairing.all
        render json: PairingSerializer.new(@pairings).to_serialized_json
    end

    def create
        @pairing = Pairing.create(pairing_params)
        render json: PairingSerializer.new(@pairing).to_serialized_json
    end

    def show
        @pairing = Pairing.find_by(id: params[:id])
        render json: PairingSerializer.new(@pairing).to_serialized_json
    end

    def destroy
        @pairing = Pairing.find_by(id: params[:id]).destroy
        @pairings = Pairing.all
        render json: PairingSerializer.new(@pairings).to_serialized_json
    end

    private

        def pairing_params
            params.require(:pairing).permit(:food_name, :description, :wine_id)
        end


end