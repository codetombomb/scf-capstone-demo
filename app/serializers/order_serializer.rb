class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total_price, :tip, :payment_type
end
