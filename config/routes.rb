Rails.application.routes.draw do
  
  resources :categories
  resources :carts
  resources :favorites
  resources :brands
  resources :sneakers
  resources :users, only: [:create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
