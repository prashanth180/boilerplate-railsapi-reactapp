class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.integer :type
      t.string :name
      t.text :excerpt
      t.text :description
      t.string :url
      t.integer :upvotes

      t.timestamps
    end
  end
end
