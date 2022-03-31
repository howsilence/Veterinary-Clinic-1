class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.belongs_to :pets, null: false, foreign_key: true
      t.string :duration
      t.datetime :booked_at
      t.timestamps
    end
  end
end
