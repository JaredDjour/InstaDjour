# json.extract! like, :id, :user_id, :likeable_id, :likeable_type
json.extract! @like, :id, :user_id, :likeable_id, :likeable_type
json.extract! @like.user, :username, :full_name, :email