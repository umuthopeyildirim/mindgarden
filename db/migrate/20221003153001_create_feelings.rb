class CreateFeelings < ActiveRecord::Migration[6.1]
  def change
    create_table :feelings do |t|
      t.string :name
    end
  end
end
