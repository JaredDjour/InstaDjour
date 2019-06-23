# json.partial! 'api/posts', posts: @posts
# json.extract! @posts, :caption, :user_id
@posts.each do |post|
   json.set! post.id do

      json.extract! post, :id, :caption, :user_id
      json.extract! post.user, :username

      if post.photo.attached?
         json.photoUrl url_for(post.photo)
      end

      post.comments.each do |comment|
         json.set! comment.id do
            json.extract! comment, :id, :user_id, :post_id, :body
            json.extract! comment.user, :username
         end
      end        
   end
end

# @posts.each do |post|
#    json.set! post.id do
#       json.extract! post.user, :username
#    end
# end
