require 'pry'
class PostsController < ApplicationController

  def create
    post = Post.create(group_id: params[:group_id],title: params[:title], content: params[:content])
    render json: post
  end

  def index

  end

end
