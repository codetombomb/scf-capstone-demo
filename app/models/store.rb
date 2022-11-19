class Store < ApplicationRecord
    has_many :deliveries
    has_many :users, through: :deliveries

    has_many :orders
end
