class UsersController < ApplicationController

  def show
    user = User.find(params[:id])
    @nickname = user.nickname
    @posts = user.posts.order("created_at DESC")
    @groups = Group.all
  end
end
