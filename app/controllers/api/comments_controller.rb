class Api::CommentsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @comment = current_user.comments.new(comment_params)
        if @comment.save
            render :show
        else 
            render json:  @comment.errors.full_messages, status: 422 
        end
    end

    def index
        @comments = Comment.all.includes(:user, :post, :likes)
        # @comments = Comment.find_by(params[:post_id])
        render :index
    end

    def show
        @comment = Comment.find(params[:id])
        if @comment
            render :show
        else
            render :index
            # render json: @post.errors.full_messages, status: 404
        end
    end

    def update
        # @post = current_user.posts.find(params[:id]) 
        @comment = comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        @comment = current_user.comments.find(params[:id])
        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id, :username)
    end


end