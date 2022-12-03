# config/routes.rb
Rails.application.routes.draw do
  resources :orders
  resources :deliveries
  resources :stores
  resources :users
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
end