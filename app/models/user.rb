class User < ApplicationRecord
    has_many :sneakers
    has_one :cart, through: :sneakers
    has_one :favorite, through: :sneakers
    validates :username, uniqueness: true

    has_secure_password

    # password=
    # password_confirmation=
    # authenticate
end
