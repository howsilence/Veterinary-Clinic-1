Rails.application.routes.draw do
  resources :appointments
  resources :pets
  resources :users
  resources :sessions, only: [:create, :destroy]

  post "/registerpet", to: "pets#create"
  post "/updatepet", to: "pets#update"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "users/pets/:id", to: "pets#destroy"
  post "/registerapt", to: "appointments#create"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


end
