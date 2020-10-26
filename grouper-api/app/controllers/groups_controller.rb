require 'pry'
class GroupsController < ApplicationController

  def create
    group = Group.create(name: params[:name],description: params[:description])
    render json: group
  end

  def show
  end

end
