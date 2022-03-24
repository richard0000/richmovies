Rails.application.routes.draw do
  get '/movies', to: 'movies#index'

  namespace :api do
    namespace :v1 do
      get '/movies', to: 'movies#index'
      get '/movies/:id', to: 'movies#show'
    end
  end

  root 'movies#index'
end
