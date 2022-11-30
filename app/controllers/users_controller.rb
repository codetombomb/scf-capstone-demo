class UsersController < ApplicationController
    skip_before_action :check_logged_in_user, only: :create
    # rescue_from(ActiveRecord::RecordInvalid, {with: :render_unprocessable}) => moved to ApplicationController
    # before_action(:check_logged_in_user, only: :index)


    # def check_logged_in_user
    #     @current_user = User.find_by(id: session[:user_id])
    #     if !@current_user
    #         render json: { errors: ["Must be logged in"] }, status: :unauthorized
    #     end
    # end

    def index
        users = User.all
        render json: users
    end

    def create 
        # create var - save newly created instance using the user_params
        user = User.create!(user_params)
        # Set our session[:user_id] -> log a user in on the backend
        session[:user_id] = user.id
        # respond to client with JSON and status
        render json: user, status: :created
    end
    
    private

    # def render_unprocessable(exception)  => moved to ApplicationController
    #     render json: {errors: exception.record.errors.full_messasges}, status: :unprocessable_entity
    # end
    
    def user_params
        params.permit(:email, :username, :password, :password_confirmation)
    end

end


# button.addEventListener("click", (clickEvent) => {

# })
