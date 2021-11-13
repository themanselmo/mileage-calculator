class CreatePaths < ActiveRecord::Migration[6.1]
  def change
    create_table :paths do |t|
      t.string :destination
      t.string :starting_location
      t.boolean :round_trip
      t.float :distance_between
      t.integer :user_id
    end
  end
end
