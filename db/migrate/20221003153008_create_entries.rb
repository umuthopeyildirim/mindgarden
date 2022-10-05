class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.string :title
      t.text :entry
      t.integer :user_id
      t.integer :feeling_id
      t.datetime :date
    end
  end
end
