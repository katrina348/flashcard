class CardsController < ApplicationController
  before_action :set_category, except: [:all]
  before_action :set_card, only: [:show]

  def index
    render json: {category: @category, cards: @category.cards}
  end

  def all
    render json: Card.all
  end

  def show
    render json: @card
  end

  private

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_card
    @card = Card.find(params[:id])
  end


end
