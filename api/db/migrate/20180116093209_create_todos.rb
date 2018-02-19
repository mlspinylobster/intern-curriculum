class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.text :text
      t.text :link
      t.boolean :completed
      t.belongs_to :task, foreign_key: true

      t.timestamps
    end
  end
end
