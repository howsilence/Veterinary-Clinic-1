class CreateVeterinarians < ActiveRecord::Migration[6.1]
  def change
    create_table :veterinarians do |t|
      t.string :name
      t.string :specialty
      t.datetime :booked_at
      t.timestamps
    end
  end
end
