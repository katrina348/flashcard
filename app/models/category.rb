class Category < ApplicationRecord
  has_many :cards, dependent: :destroy
  
end
