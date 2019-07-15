# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#  full_name       :string
#

class User < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

    # include PgSearch
    include PgSearch::Model
    # pg_search_scope :search_for, against: %i(username full_name)
    # pg_search_scope :search, against: [:username, :full_name]
    # multisearchable against: [:username, :full_name]

    pg_search_scope :search,
                  against: [
                    :username,
                    :full_name
                  ],
                  using: {
                    tsearch: {
                      prefix: true,
                      normalization: 2
                    }
                  }

    def self.perform_search(keyword)
        if keyword.present?
            then User.search(keyword)
            else User.all
        end.sorted
    end
    # pg_search_scope :search_full_text, against: {
    # title:   'A',
    # content: 'B'
    # }

    # pg_search_scope :search_full_text, against: [
    # [:title, 'A'],
    # [:content, 'B']
    # }
    
    has_many :posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post
 
    has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Comment
    
    has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like
  
    has_many :follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

    has_many :followers,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :Follow 

    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        return user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end


end
