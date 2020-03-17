class Group < ApplicationRecord
  has_many :posts
  # mount_uploader :images, ImageUploader
end
