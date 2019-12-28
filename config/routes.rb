Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :groups do
    resources :posts, only: [:new, :create]
    collection do
      get 'search'
    end
  end
  resources :users, only: [:show] do
    resources :posts, only: [:edit, :update, :destroy]
  end
end
