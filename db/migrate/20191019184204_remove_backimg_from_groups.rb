class RemoveBackimgFromGroups < ActiveRecord::Migration[5.2]
  def change
    remove_column :groups, :backimg, :text
  end
end
