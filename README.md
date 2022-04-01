# Rich Movies

## An application that uses [The Movie DB](themoviedb.org) to list the latest available movies

### Run locally

- git clone
- bundle install
- yarn install
- optionally define a .env file with DB variables (the ones in database.yml)
- set MOVIES_API_KEY environmetn variable with your generated API_KEY (check [here](https://developers.themoviedb.org/3) to know how)
- rake db:create db:migrate
- rails s
