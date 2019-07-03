# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  caption    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    validates :user_id, :caption, presence: true 
    # validate :has_photo
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_one_attached :photo
    
    # def has_photo
    #     if !self.photo.attached?
    #         errors[:photo] << "attach a photo"
    #     end
    # end
    has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

    # has_many :likes,
    # primary_key: :id,
    # foreign_key: :comment_id,
    # class_name: :Like 
    has_many :likes, 
    as: :likeable
 
end

