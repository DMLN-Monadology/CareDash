Rails.application.routes.draw do

  resources :doctors, only: [:index, :create, :update, :destroy, :show], :defaults => { :format => 'json' } do
    resources :reviews, only: [:index, :create, :update, :destroy, :show], :defaults => { :format => 'json' }
  end

  resources :reviews, only: [:index, :create, :update, :destroy, :show], :defaults => { :format => 'json' }

  root to: "static_pages#root"

end
