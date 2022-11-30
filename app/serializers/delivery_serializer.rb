class DeliverySerializer < ActiveModel::Serializer
  attributes :id, :customer_name, :address
end
