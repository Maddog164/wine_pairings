class Api::V1::PairingsController < ApplicationController

    def index
        binding.pry
        @pairings = Pairing.all
        render json: PairingSerializer.new(@pairings).to_serialized_json
    end

    def create
        binding.pry
        @pairing = Pairing.create(pairing_params)
        render json: PairingSerializer.new(@pairing).to_serialized_json
    end

    def show
        binding.pry
        @pairing = Pairing.find_by(id: params[:id])
        render json: PairingSerializer.new(@pairing).to_serialized_json
    end

    def destroy
        binding.pry
        @pairing = Pairing.find_by(id: params[:id]).destroy
        @pairings = Pairing.all
        render json: PairingSerializer.new(@pairings).to_serialized_json
    end

    private

        def pairing_params
            params.require(:pairing).permit(:food_name, :description, :wine_id)
        end


end