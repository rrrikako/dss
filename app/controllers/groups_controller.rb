class GroupsController < ApplicationController
  
  def index
    @groups = Group.all
    @posts = Post.all
  end

  def new
    @group = Group.new
  end

  def create
   group = Group.create(group_params) 

   if group.save
    redirect_to group_path(group.id)
   else
    render :new
   end
  end

  def show
    @groups = Group.all
    @group = Group.find(params[:id])
    @posts = @group.posts.includes(:user)
  end

  def search
    @groups = Group.where('name LIKE(?)', "%#{params[:keyword]}%").limit(20)
    respond_to do |format|
      format.html
      format.json
     end
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end
end

