class SneakersController < ApplicationController
  skip_before_action :authenticate_user
  # before_action :is_authorized?, only: [:create]
  # before_action :authorize
  skip_before_action :authorize, only: [:index]
  before_action :set_sneaker, only: [:show, :update, :destroy]
  
  # GET /sneakers
  def index
    @sneakers = Sneaker.all

    render json: @sneakers
  end

  # GET /sneakers/1
  def show
    render json: @sneaker
  end

  # POST /sneakers
  def create
    @sneaker = Sneaker.new(sneaker_params)

    if @sneaker.save
      render json: @sneaker, status: :created, location: @sneaker
    else
      render json: @sneaker.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sneakers/1
  def update
    if @sneaker.update(sneaker_params)
      render json: @sneaker
    else
      render json: @sneaker.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sneakers/1
  def destroy
    @sneaker.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sneaker
      @sneaker = Sneaker.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sneaker_params
      params.permit(:name, :image, :price, :brand, :amount)
    end

    def authorize
      return render json: {error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
