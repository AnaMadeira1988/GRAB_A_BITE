Rails.application.routes.draw do
  devise_for :users
  root to: "bites#index"

  get '/users/:id', to: 'users#show', as: 'user'

  resources :bites, only: [:new, :show, :create, :edit, :update, :destroy] do
    member do
      post 'book', to: 'bites#book'
    end
  end

  resources :guests, only: [:destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
