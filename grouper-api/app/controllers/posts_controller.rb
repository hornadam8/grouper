require 'pry'
class PostsController < ApplicationController

  def create
    post = Post.create(group_id: params[:group_id],title: params[:title], content: params[:content])
    render json: post
  end

  def index
    group = Group.find_by(id: params[:group_id])
    render json: group.posts
  end

end
