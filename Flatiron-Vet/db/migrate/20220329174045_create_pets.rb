class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.belongs_to :owner_id
      t.string :name
      t.integer :age
      t.float :weight
      t.string :species
      t.string :breed
      t.boolean :fixed

      t.timestamps
    end
  end
end
