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

  def cast(id)
    cast = Tmdb::Movie.cast(id)
    cast = cast.map{|person|
              {
                name: person[:name],
                character: person[:character], 
                profile_image_path: person_image(person[:id])
              }
            }
    cast.filter_map{|person| person if person[:profile_image_path].present? }
  end

  def crew(id)
    crew = Tmdb::Movie.crew(id)

    crew.sort_by!(&:popularity).reverse.first(8)
  end

  private

  def filter_movies movies
    movies.select {|m|
      !m[:adult] &&
      Date.parse(m[:release_date]) > (Date.today - 3.years)
    }
  end

  def person_image(id)
    images = Tmdb::Person.images(id)
    image = images[:profiles].first

    image.nil? ? nil : image[:file_path]
  end
end