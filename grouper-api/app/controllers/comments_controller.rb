class CommentsController < ApplicationController

  def index
    post = Post.find_by(id: params[:post_id])
    render json: post.comments
  end

  def create
    comment = Comment.create(post_id: params[:post_id],content: params[:content])
    render json: comment
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    comment.destroy
  end
end
