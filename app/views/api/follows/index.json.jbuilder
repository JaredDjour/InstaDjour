@follows.each do |follow|
   json.set! follow.id do
      json.extract! follow, :id, :follower_id, :following_id
      json.extract! follow.follower, :username
      # json.extract! follow.followed, :username
   end
end