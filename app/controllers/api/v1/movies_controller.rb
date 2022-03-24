# frozen_string_literal: true

module Api
  module V1
    class MoviesController < ApplicationController
      def index
        movies = MoviesHelper.get_latest

        render json: movies
      rescue StandardError => e
        render json: { error: e.message }
      end

      def show
        movie = MoviesHelper.show(params[:id])

        render json: movie
      rescue StandardError => e
        render json: { error: e.message }
      end
    end
  end 
end