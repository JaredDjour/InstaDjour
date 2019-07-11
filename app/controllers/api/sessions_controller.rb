class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render "/api/users/show"
            # @users = User.all
            # render "/api/users/index"
        else
            render json: ['Invalid username or password.'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
          logout
        else
          render json: ["No one's signed in!"], status: 404
        end
    end
end
