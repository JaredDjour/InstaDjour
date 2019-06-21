json.partial! 'api/posts/post', post: @post

# json.extract! @post, :id, :caption, :user_id
# if @post.photo.attached?
#    json.photoUrl url_for(@post.photo)
# end 
   # json.set! @post.id do
      json.extract! @post.user, :username
   # end