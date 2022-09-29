class User < ApplicationRecord
    has_many :sneakers
    has_one :cart
    has_one :favorite
    validates :username, uniqueness: true

    has_secure_password

    # password=
    # password_confirmation=
    # authenticate
end
