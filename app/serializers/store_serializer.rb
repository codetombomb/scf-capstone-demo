class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :open, :phone_number
end
