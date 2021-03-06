@comments.each do |comment|
   json.set! comment.id do
      json.extract! comment, :id, :user_id, :post_id, :body
      json.extract! comment.user, :username, :full_name, :email
   end
end