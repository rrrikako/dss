class PostsController < ApplicationController
  before_action :move_to_index, except: :index
  before_action :set_group

  def new
    @post = Post.new
  end

  def create
    post = @group.posts.new(create_params)
    if post.save
      redirect_to group_path(@group.id)
    else 
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    post = Post.find(params[:id])
    if post.user_id == current_user.id
      post.update(create_params)
  end

  private
  def create_params
    params.require(:post).permit(:title, :image, :sound).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

end
