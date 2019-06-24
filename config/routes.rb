Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#we don't need any 'edit' or 'new' bc our frontend will handle those for us:
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only:[:create, :index, :show, :update] do
      resources :posts, only:[:index]
    end
    # resources :posts, only:[:create, :show, :index, :update, :destroy] do
    #   resources :comments, only:[:create, :index, :update, :destroy]
    # end
    resources :posts, only:[:create, :show, :index, :update, :destroy]
    resources :comments, only:[:create, :index, :update, :destroy]

  end

  root to: "static_pages#root"

end
