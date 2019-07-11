class AddIndexToFollows < ActiveRecord::Migration[5.2]
  def change
      add_index :follows, :follower_id
      add_index :follows, :following_id
  end
end
