# json.partial! 'api/posts', posts: @posts
# json.extract! @posts, :caption, :user_id
@posts.each do |post|
   json.set! post.id do
    json.extract! post, :id, :caption, :user_id
      if post.photo.attached?
         json.photoUrl url_for(post.photo)
      end
   end
end

