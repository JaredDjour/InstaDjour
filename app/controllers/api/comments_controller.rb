class Api::CommentsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @comment = current_user.comments.new(comment_params)
        # @comment = Comment.new(comment_params)
        # @comment.user_id = params[:user_id]
        # @comment.post_id = params[:post_id]
        # @comment.user_id = current_user.id
            if @comment.save
            #   @comments = Comment.all
                # render :index
                render :show
            else
              
                render json:  @comment.errors.full_messages, status: 422 
            end
    end

    def index
        @comments = Comment.all
        # @comments = Comment.find_by(params[:post_id])
        render :index
    end

    def show
        # @post = current_user.posts.find(params[:id])
        @comment = Comment.find(params[:id])
        # render :show

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
        # @comment.destroy2
        # render json: @comment.errors.full_messages, status: 404
        if @comment.destroy
            # @comments = Comment.all
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