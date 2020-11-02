Rails.application.routes.draw do

  resources :groups do
    resources :posts do
      resources :comments
    end
  end
  
end
