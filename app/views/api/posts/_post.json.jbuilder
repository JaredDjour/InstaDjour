# json.extract! post, :id, :caption, :user_id
# json.extract! post.user, :username
     
# if post.photo.attached?
#    json.photoUrl url_for(post.photo)
# end

# json.set! @post.id do
#     json.extract! @post, :id, :caption, :user_id
#     json.extract! @post.user, :username
 
#     if post.photo.attached?
#         json.photoUrl url_for(post.photo)
#     end 
# end

json.extract! post, :id, :caption, :user_id

if post.photo.attached?
   json.photoUrl url_for(post.photo)
end 
