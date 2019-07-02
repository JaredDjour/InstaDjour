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

    validates :user_id, :comment_id, :post_id, :likeable_id, :likeable_type, presence: true

    belongs_to :likeable, polymoprhic: true
    belongs_to :user

end
