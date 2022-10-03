class Feeling < ActiveRecord::Base
  has_many :entries
  has_many :users, through: :entries
end
