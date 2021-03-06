class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    if User.find_by(username: user_params[:username])
        render json: @user.errors.full_messages, status: 401
    elsif @user.save
        login!(@user)
        render :show
    else
        render json: @user.errors.full_messages, status: 402
    end
  end


  private 
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
