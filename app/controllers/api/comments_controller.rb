class Api::CommentsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @comment = current_user.comments.new(comment_params)
        # @comment = Comment.new(comment_params)
        # @comment.post_id = params[:user_id]
        # @comment.post_id = params[:post_id]
        debugger
            if @comment.save
                # @post = @comment.post
                render :index
                # render "api/posts/show"
            else
                render json:  @comment.errors.full_messages, status: 422 
            end
    end

    def index
        @comments = Comment.all
        # @comments = Comment.find_by(params[:post_id])
        render :index
    end

    # def update

    # end

    def destroy
        @comment = current_user.comments.find(params[:id])
        if @comment.destroy
            render :index
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id)
    end


end