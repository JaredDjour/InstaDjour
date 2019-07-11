@follows.each do |follow|
   json.set! follow.id do
      json.extract! follow, :id, :follower_id, :following_id
      json.extract! follow.follower, :username, :full_name, :email
      json.extract! follow.followed, :username, :full_name, :email
   end
end