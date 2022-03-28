Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :destroy, :update]
  resources :sessions, only: [:create, :destroy]

  # get '/users/:id', to: 'users#show'
  get "/hello", to: "application#hello_world"

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
