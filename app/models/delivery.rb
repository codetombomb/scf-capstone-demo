class Delivery < ApplicationRecord
    belongs_to :user
    belongs_to :store

    has_many :orders

end
