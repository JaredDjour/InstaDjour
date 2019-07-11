@users.each do |user|
   json.set! user.id do
    #   json.partial! 'api/users/user', user: @user
   #  debugger
      json.extract! user, :id, :username, :full_name, :email
   end
end