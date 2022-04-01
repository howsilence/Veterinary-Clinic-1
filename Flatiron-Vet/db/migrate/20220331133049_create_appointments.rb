class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :duration
      t.integer :day
      t.integer :month
      t.string :time
      t.string :doctor
      t.belongs_to :pet, null: false, foreign_key: true
      t.timestamps
    end
  end
end
