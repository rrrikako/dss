class AddImageToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :images, :text
  end
end
