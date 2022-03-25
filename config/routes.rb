Rails.application.routes.draw do
  get '/movies', to: 'movies#index'
  get '/movies/:id', to: 'movies#index'

  namespace :api do
    namespace :v1 do
      get '/movies', to: 'movies#index'
      get '/movies/:id', to: 'movies#show'
      get '/movies/:id/crew', to: 'movie_crews#show'
      get '/movies/:id/cast', to: 'movie_casts#show'
    end
  end

  root 'movies#index'
end
