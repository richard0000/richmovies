# frozen_string_literal: true

module Api
  module V1
    class MovieCrewsController < ApplicationController
      def show
        movie_crew = MoviesHelper.crew(params[:id])

        render json: movie_crew
      rescue StandardError => e
        render json: { error: e.message }
      end
    end
  end 
end