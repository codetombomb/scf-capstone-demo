class SessionsController < ApplicationController

  skip_before_action :check_logged_in_user, only: :create
  #/login
  def create
    # find a user by username
    user = User.find_by(username: params[:username])
    # verify that the user is who they say they are by checking the password that they provided agianst the pw that is stored in the db
    if user && user.authenticate(params[:password])
      # set the session[:user_id] to the found and authorized user
      session[:user_id] = user.id
      # Render user with status code ok
      render json: user, status: :ok
    else
      render json: { errors: ["Unauthorized"] }, status: :unauthorized
    end
  end

  #/logout
  def destroy
    session.delete(:user_id)
    # session[:user_id] = nil
    head :no_content
  end
  
end
