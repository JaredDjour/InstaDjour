@posts.each do |post|
   json.set! post.id do
      json.partial! 'api/posts/post', post: post
   end
end

# @users.each do |user|
#    json.set! user.id do
#       json.extract! user, :username, :full_name, :email
#    end
# end