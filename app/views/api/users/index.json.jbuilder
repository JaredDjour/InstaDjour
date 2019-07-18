@users.each do |user|
   json.set! user.id do
    #   json.partial! 'api/users/user', user: @user
      json.extract! user, :id, :username, :full_name, :email
   end
end

# posts.each do |post|
#    json.set! post.id do 
#       json.extract! post, :id, :caption, :user_id
#       json.extract! post.user, :username, :full_name, :email
#       if post.photo.attached?
#          json.photoUrl url_for(post.photo)
#       end 
#    end
# end

# comments.each do |comment|
#    json.set! comment.id do
#       json.extract! comment, :id, :user_id, :post_id, :body
#       json.extract! comment.user, :username, :full_name, :email
#    end
# end

# likes.each do |like|
#     json.set! like.id do
#         json.extract! like, :id, :user_id, :likeable_id, :likeable_type
#         json.extract! like.user, :username, :full_name, :email
#     end
# end

# follows.each do |follow|
#    json.set! follow.id do
#       json.extract! follow, :id, :follower_id, :following_id
#       json.extract! follow.follower, :username, :full_name, :email
#       json.extract! follow.followed, :username, :full_name, :email
#    end
# end