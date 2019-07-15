class SearchController < ApplicationController

    def index
        if params[:query].present?
            users = User.search(params[:query])
            render "/api/users/index"
        else
            @users = User.all
            render "/api/users/index" 
        end
    end
end