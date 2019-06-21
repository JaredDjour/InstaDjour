class Api::CommentsController < ApplicatioController

    before_action :ensure_logged_in

    def create
        @comment = current_user.comments.new(comments_params)
        @comment.post_id = params[:post_id]
        @comment.save
        render :index
        render json:  @comment.errors.full_messages, status: 422 

    end

    def index
        @posts = Comment.all
        render :index
    end

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
        params.require(:comment).permit(:body)
    end


end