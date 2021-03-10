class CreatePairings < ActiveRecord::Migration[6.0]
  def change
    create_table :pairings, force: :cascade do |t|
      t.string :food_name
      t.string :description
      t.index [:wine_id], name: "index_pairings_on_wine_id"

      t.timestamps
    end
  end
end
