class CreateDeliveries < ActiveRecord::Migration[7.0]
  def change
    create_table :deliveries do |t|
      t.string :customer_name
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.integer :user_id
      t.integer :store_id

      t.timestamps
    end
  end
end
