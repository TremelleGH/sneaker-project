class Sneaker < ApplicationRecord
    belongs_to :user
    belongs_to :cart
    belongs_to :favorite
end
