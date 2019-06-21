json.partial! 'api/posts/post', post: @post


   json.set! @post.id do
      json.extract! @post.user, :username
   end