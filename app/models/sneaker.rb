class Sneaker < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :cart, optional: true
    belongs_to :favorite, optional: true
end
