# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  comment_id    :integer          not null
#  post_id       :integer          not null
#  likeable_type :string           not null
#  likeable_id   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord

    # validates :user_id, :comment_id, :post_id, :likeable_id, :likeable_type, presence: true
    validates :likeable_type, presence: true

    belongs_to :likeable, polymorphic: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    # belongs_to :post,
    # primary_key: :id,
    # foreign_key: :post_id,
    # class_name: :Post

    # belongs_to :comment,
    # primary_key: :id,
    # foreign_key: :comment_id,
    # class_name: :Comment 
end
