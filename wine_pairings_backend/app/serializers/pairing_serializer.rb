class PairingSerializer<ActiveModel::Serializer

    def initialize(pairing_object)
        @pairing = pairing_object
    end

    def to_serialized_json
        @pairing.to_json(:include => {
            :wine => {:only => [:name, :color, :grape, :image_url]}
            :pairing => {:only => [:food_name, :description]}
        })
    end
    
end