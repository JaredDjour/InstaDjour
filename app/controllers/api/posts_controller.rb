class Api::PostsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            # render "/api/posts/show"
            render :show
        else
            render json:  @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = current_user.posts
        # render "/api/posts/index"
        render :index
    end

    def show
        @post = current_user.posts.find(params[:id])

        if @post
            render :show
        else
            render json: @post.errors.full_messages, status: 404
        end
    end

    def update
    @post = current_user.posts.find(params[:id])

        if @post.update(post_params)
        render :show
        else
        render @post.errors.full_messages, status: 401
        end
    end

    def destroy
        @post = current_user.posts.find(params[:id])

        if @post.destroy
            render :index, @posts = Post.all
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:caption)
    end

end