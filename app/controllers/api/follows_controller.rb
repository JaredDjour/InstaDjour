class Api::FollowsController < ApplicationController
    before_action :ensure_logged_in

    def create
        @follow = current_user.follows.new(follow_params)
        if @follow.save
            render :show
        else 
            render json:  @follow.errors.full_messages, status: 422 
        end
    end

    def index
        @follows = Follow.all
        render :index
    end

    def show
        @follow = Follow.find(params[:id])
        if @follow
            render :show
        else
            render :index
        end
    end

    def destroy
     
        # @follow = current_user.follows.find(params[:id])
        @follow = Follow.find(params[:id])
        if @follow.destroy
            render :show
        else
            render json: @follow.errors.full_messages, status: 404
        end
    end

    private

    def follow_params
        params.require(:follow).permit(:following_id, :follower_id)
    end
end