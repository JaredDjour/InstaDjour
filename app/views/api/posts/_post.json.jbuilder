json.extract! post, :id, :caption, :user_id
json.extract! post.user, :username, :full_name, :email
if post.photo.attached?
   json.photoUrl url_for(post.photo)
end 
