class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ["Invalid Credentials"], status: 401
    else
      #login!(@user)
      render json: ["Successfully logged in!"]
    end

  end

  def destroy
    # Render a 404 message if there is no current user.
    render json: {message: 'Logout succesfull!'}
  end


end
