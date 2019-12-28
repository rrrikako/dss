json.array! @groups do |group|
  json.id group.id
  json.name group.name
  json.num group.posts.length
end