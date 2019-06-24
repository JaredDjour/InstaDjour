class Api::CommentsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @comment = current_user.comments.new(comment_params)
        # @comment = Comment.new(comment_params)
        # @comment.user_id = params[:user_id]
        # @comment.post_id = params[:post_id]
        # @comment.user_id = current_user.id
            if @comment.save
                # debugger
                # @post = @comment.post
                # render :index
                render :show
                # render "api/posts/show"
            else
                # debugger
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
        # @comment.destroy2
        # render json: @comment.errors.full_messages, status: 404
        if @comment.destroy
            # render :index
            render :show
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id)
    end


end