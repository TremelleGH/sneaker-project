class AddDescriptionToSneakers < ActiveRecord::Migration[6.1]
  def change
    add_column :sneakers, :description, :text
  end
end
