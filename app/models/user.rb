class User < ApplicationRecord
    has_secure_password
    has_many :deliveries
    has_many :stores, through: :deliveries

    validates :email, :username, presence: true
end
