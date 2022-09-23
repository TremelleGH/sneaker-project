class CreateSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :sneakers do |t|
      t.string :name
      t.string :image
      t.float :price
      t.string :brand
      t.integer :user_id
      t.integer :favorite_id
      t.integer :cart_id
      t.timestamps
    end
  end
end
