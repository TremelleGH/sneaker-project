class AddAmountToSneakers < ActiveRecord::Migration[6.1]
  def change
    add_column :sneakers, :amount, :integer
  end
end
