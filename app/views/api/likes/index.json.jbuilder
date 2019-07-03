@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :user_id, :post_id, :comment_id, :likeable_id, :likeable_type
        json.extract! like.user, :username
    end
end