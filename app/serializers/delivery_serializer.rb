class DeliverySerializer < ActiveModel::Serializer
  attributes :id, :customer_name, :address
  
  belongs_to :store
  has_many :orders
end
