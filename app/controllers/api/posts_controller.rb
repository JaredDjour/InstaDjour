class API::PostsController < ApplicationController

    before_action :ensure_logged_in

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            render "/api/posts/show"
        else
            render json:  @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = current_user.posts
        render "/api/posts"
    end

    def show
        @post = current_user.posts.find(params[:id])

        if @post
            render "/api/posts/:id"
        else
            @post.errors.full_messages, status: 404
        end
    end

    def update
    @post = current_user.posts.find(params[:id])

        if @post.update(post_params)
        render "/api/posts/:id"
        else
        render @post.errors.full_messages, status: 401
        end
    end

    def destroy
        @post = current_user.posts.find(params[:id])
        @post.destroy
        render "/api/posts/show"
    end

    private

    def post_params
        params.require(:posts).permit(:caption)
    end

end