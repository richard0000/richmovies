# frozen_string_literal: true

module MoviesHelper
  extend self

  def get_latest
    response = Tmdb::Movie.popular
  
    response[:results]
  end

  def show(id)
    Tmdb::Movie.detail(id)
  end
end