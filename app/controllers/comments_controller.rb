class CommentsController < ApplicationController
  def index
  	article = Article.find(params[:article_id])
    comments = article.comments.latest
    render json: {comments: comments}
  end

  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.new(comment_params)

    @comment.avatar_url = "https://flathash.com/#{@comment.commenter}"
    @comment.save

    redirect_to article_path(@article)
  end

  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
  end

  def latest
  	comments = Comment.latest
  	render json: {comments: comments}
  end

  private
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end
end
