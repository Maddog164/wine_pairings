class AddWineIdToPairings < ActiveRecord::Migration[6.0]
  def change
    add_column :pairings, :wine_id, :integer
  end
end
