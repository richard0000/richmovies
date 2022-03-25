# frozen_string_literal: true

module MoviesHelper
  extend self

  def get_latest
    response = Tmdb::Movie.popular

    filter_movies(response[:results])
  end

  def show(id)
    Tmdb::Movie.detail(id)
  end

  private

  def filter_movies movies
    movies.select {|m|
      !m[:adult] &&
      Date.parse(m[:release_date]) > (Date.today - 3.years)
    }
  end
end