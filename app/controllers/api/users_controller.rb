class Api::UsersController < ApplicationController
  before_action :authenticate!, only: %i[me]
  skip_before_action :verify_authenticity_token
  def create
    user = User.new(user_params)

    if user.save
      render json: user, methods: [:avatar_url]
    else
      render json: user.errors, status: :bad_request
    end
  end

  def me
    render json: current_user, methods: [:avatar_url]
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :name, :avatar)
  end
end
