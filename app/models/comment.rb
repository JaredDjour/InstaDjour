# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :user_id, :post_id, :body, presence: true
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

    # has_many :likes,
    # primary_key: :id,
    # foreign_key: :comment_id,
    # class_name: :Like 
   
    has_many :likes, 
    as: :likeable

 
end
