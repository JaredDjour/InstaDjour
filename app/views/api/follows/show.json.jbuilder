json.extract! @follow, :id, :follower_id, :following_id
json.extract! @follow.user, :username