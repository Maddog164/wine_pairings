class WineSerializer<ActiveModel::Serializer

    attributes :id, :name, :color, :grape, :image_url

    has_many :pairings

    def initialize(wine_object)
        @wine = wine_object
    end

    def to_serialized_json
        return @wine.to_json(include:[:pairings])
    end

end