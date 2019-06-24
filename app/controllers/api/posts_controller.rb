class Api::PostsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @post = current_user.posts.new(post_params)
        # @post = Post.new(post_params)
        # @post.user_id = current_user.id
        if @post.save
            render :show
            # @posts = Post.all.with_attached_photo
            # render :index
        else
            render json:  @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.all.with_attached_photo.includes(:comments)
        @comments = []

        @posts.each do |post|
            post.comments.each do |comment|
                @comments << comment
            end
        end
        # @posts = current_user.posts.with_attached_photo  -- This is for user show page!!!
        render :index
    end

    def show
        # @post = current_user.posts.find(params[:id])
        @post = Post.find(params[:id]).with_attached_photo.includes(:comments)
        # render:show
        if @post
            render :show
        else
            # render :index
            render json: @post.errors.full_messages, status: 404
        end
    end

    def update
        # @post = current_user.posts.find(params[:id]) 
        @post = Post.find(params[:id])
        if @post.update(post_params) && post.user_id == current_user.id
            render :show
            # render :edit
        else
            render @post.errors.full_messages, status: 401
        end
    end

    def destroy
        @post = current_user.posts.find(params[:id])
        # @post = Post.find(params[:id])
        if @post.destroy
            # @posts = Post.all.with_attached_photo
            # render :index
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private

    def post_params
        # params.permit(:caption, :photo)
        params.require(:post).permit(:caption, :username, :photo)
        # params.require(:post).permit(:caption)
        # params.permit(:caption, :photo)
    end

end