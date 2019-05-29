Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#we don't need any 'edit' or 'new' bc our frontend will handle those for us:
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :index, :show, :update]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"

end
