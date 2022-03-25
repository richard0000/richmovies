# frozen_string_literal: true

module Api
  module V1
    class MovieCastsController < ApplicationController
      def show
        movie_cast = MoviesHelper.cast(params[:id])

        render json: movie_cast
      rescue StandardError => e
        render json: { error: e.message }
      end
    end
  end 
end