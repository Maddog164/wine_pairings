class CreateWines < ActiveRecord::Migration[6.0]
  def change
    create_table :wines, force: :cascade do |t|
      t.string :name
      t.string :color
      t.string :grape

      t.timestamps
    end
  end
end
