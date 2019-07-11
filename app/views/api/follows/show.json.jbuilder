json.extract! @follow, :id, :follower_id, :following_id
json.extract! @follow.follower, :username
json.extract! @follow.followed, :username