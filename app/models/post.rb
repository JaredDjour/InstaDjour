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
   
    include PgSearch::Model
    multisearchable against: :caption 
    # include PgSearch
    # pg_search_scope :search_full_text, against: {
    #     caption:   'A',
    #     # content: 'B'
    # }

    # pg_search_scope :search_full_text, against: [
    #     [:caption, 'A'],
    #     # [:content, 'B']
    # ]
     
    has_one_attached :photo

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

    has_many :likes, 
    as: :likeable

        
    # def has_photo
    #     if !self.photo.attached?
    #         errors[:photo] << "must be attached."
    #     end
    # end

end

