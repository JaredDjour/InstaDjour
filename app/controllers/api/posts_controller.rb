class Api::PostsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @post = current_user.posts.new(post_params)
        # @post = Post.new(post_params)
        # @post.user_id = current_user.id
        if @post.save
            # render "/api/posts/show"
            render :show
            # render :index
        else
            render json:  @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.all.with_attached_photo
        # @posts = Post.with_attached_photo.all
        # @posts = current_user.posts
        # render "/api/posts/index"
        render :index
    end

    def show
        # @post = current_user.posts.find(params[:id])
       @post = Post.find(params[:id])
        # render:show
        if @post
            render :show
        else
            render json: @post.errors.full_messages, status: 404
        end
    end

    def update
        # @post = current_user.posts.find(params[:id])
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :show
        else
            render @post.errors.full_messages, status: 401
        end
    end

    def destroy
        # @post = current_user.posts.find(params[:id])
        @post = Post.find(params[:id])
        @post.destroy
        render :show
        # if @post.destroy
        #     @posts = Post.all
        #     render :index
        # else
        #     render json: @post.errors.full_messages, status: 422
        # end
    end

    private

    def post_params
        # params.permit(:caption, :photo)
        params.require(:post).permit(:caption, :photo)
        # params.require(:post).permit(:caption)
        # params.permit(:caption, :photo)
    end

end