require 'pry'
class GroupsController < ApplicationController

  def create
    group = Group.create(name: params[:name],description: params[:description])
    render json: group
  end

  def index
    groups = Group.all
    render json: groups
  end


  def destroy
    group = Group.find(params[:id])
    group.destroy
  end

end
