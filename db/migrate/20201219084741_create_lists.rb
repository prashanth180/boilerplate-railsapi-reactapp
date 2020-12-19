class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string :title
      t.text :excerpt
      t.text :description
      t.integer :upvotes

      t.timestamps
    end
  end
end
