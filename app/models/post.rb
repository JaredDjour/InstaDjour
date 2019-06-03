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

    belongs_to :user

end
