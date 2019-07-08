# json.partial! `api/likes/like`, like: @like
# json.partial! `api/likes/like`

json.extract! @like, :id, :user_id, :likeable_id, :likeable_type
json.extract! @like.user, :username