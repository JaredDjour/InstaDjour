# json.extract! post, :id, :caption, :user_id
# json.extract! post.user, :username
     
# if post.photo.attached?
#    json.photoUrl url_for(post.photo)
# end

json.set! @post.id do
    json.extract! @post, :id, :caption, :user_id
    json.extract! @post.user, :username

    @post.comments.each do |comment|
        json.set! comment.id do 
         json.extract! comment, :id, :user_id, :post_id, :body
         json.extract! comment.user, :username
        end
    end
    
    if post.photo.attached?
    json.photoUrl url_for(post.photo)
    end 
end