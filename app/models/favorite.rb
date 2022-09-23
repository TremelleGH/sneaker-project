class Favorite < ApplicationRecord
    has_many :sneakers
    belongs_to :user
end
