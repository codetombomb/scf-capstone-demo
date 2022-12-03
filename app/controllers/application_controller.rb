class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from(ActiveRecord::RecordInvalid, {with: :render_unprocessable})

    before_action(:check_logged_in_user)

    def check_logged_in_user
      @current_user = User.find_by(id: session[:user_id])
      if !@current_user
          render json: { errors: ["Must be logged in"] }, status: :unauthorized
      end
    end

    def render_unprocessable(exception)
      render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
  
    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end
  end