Rails.application.routes.draw do
  resources :pets
  resources :users
  resources :sessions, only: [:create, :destroy]

  post "/registerpet", to: "pets#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  
  get "/hello", to: "application#hello_world"

end
