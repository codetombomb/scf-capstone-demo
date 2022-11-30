class DeliveriesController < ApplicationController
    def index 
        deliveries = Delivery.all
        render json: deliveries
    end
end
