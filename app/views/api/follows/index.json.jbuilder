@follows.each do |follow|
   json.set! follow.id do
      json.extract! follow, :id, :follower_id, :following_id
      json.extract! follow.user, :username
   end
end