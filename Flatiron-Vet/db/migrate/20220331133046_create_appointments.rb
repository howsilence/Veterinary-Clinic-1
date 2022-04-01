class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :duration
      t.integer :day
      t.integer :month
      t.string :time
      t.string :doctor
      t.string :with
      
      t.timestamps
    end
  end
end
