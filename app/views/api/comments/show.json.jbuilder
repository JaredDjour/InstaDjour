json.comment do
    json.extract! @comment, :id, :user_id, :post_id, :body 
    json.extract! @comment.user, :username
end