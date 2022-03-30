class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.string :breed
      t.float :age
      t.float :weight
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :fixed

      t.timestamps
    end
  end
end
