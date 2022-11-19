# config/routes.rb
Rails.application.routes.draw do
  resources :orders
  resources :deliveries
  resources :stores
  resources :users
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end