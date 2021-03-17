class PairingSerializer<ActiveModel::Serializer

    attributes :id, :food_name, :description, :wine_id

    has_one :wine

    def initialize(pairing_object)
        @pairing = pairing_object
    end

    def to_serialized_json
        binding.pry
        return @pairing.to_json
    end
 
end