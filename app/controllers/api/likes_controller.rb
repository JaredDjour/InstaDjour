class Api::LikesController < ApplicationController
    before_action :ensure_logged_in

    def create
        @like = current_user.likes.new(like_params)
        # debugger
            if @like.save
                render :show
            else 
                render json:  @like.errors.full_messages, status: 422 
            end
    end

    def index
        @likes = Like.all
        render :index
    end

    def show
        @like = Like.find(params[:id])
        if @like
            render :show
        else
            render :index
            # render json: @like.errors.full_messages, status: 404
        end
    end

    def destroy
        @like = current_user.likes.find(params[:id])
        if @like.destroy
            render :show
        else
            render json: @like.errors.full_messages, status: 404
        end
    end

    private

    def like_params
        # params.require(:like).permit(:likeable_type, :likeable_id, :user_id, :post_id, :comment_id)
        params.require(:like).permit(:likeable_type, :likeable_id, :user_id)
    end

end