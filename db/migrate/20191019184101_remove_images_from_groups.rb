class RemoveImagesFromGroups < ActiveRecord::Migration[5.2]
  def change
    remove_column :groups, :images, :text
  end
end
