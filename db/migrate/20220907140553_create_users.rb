class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :avatar
      t.string :username
      t.string :email
      t.boolean :admin
      t.string :password
      t.timestamps
    end
  end
end
