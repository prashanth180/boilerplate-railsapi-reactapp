class CreateListItems < ActiveRecord::Migration[6.0]
  def change
    create_table :list_items do |t|
      t.references :list, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true
      t.text :description
      t.integer :position

      t.timestamps
    end
  end
end
