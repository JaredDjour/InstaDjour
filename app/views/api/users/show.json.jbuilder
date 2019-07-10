
# json.extract! @user, :id, :username, :full_name, :email

@users.each do |user|
   json.set! user.id do
    #   json.partial! 'api/users/user', user: @user
      json.extract! user, :id, :username, :full_name, :email
   end
end