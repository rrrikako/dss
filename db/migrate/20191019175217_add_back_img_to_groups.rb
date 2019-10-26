class AddBackImgToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :backimg, :text
  end
end
