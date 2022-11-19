class User < ApplicationRecord
    has_many :deliveries
    has_many :stores, through: :deliveries

    validates :email, :username, presence: true
end
