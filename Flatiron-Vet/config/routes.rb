Rails.application.routes.draw do
  resources :pets
  resources :users
  resources :sessions, only: [:create, :destroy]


  post "/signup", to: "users#create"
  get "/me", to: "users#show"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # post "/registerpet", to "pets#create"
  get "/hello", to: "application#hello_world"

end
