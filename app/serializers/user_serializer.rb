class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :admin
  has_many :sneakers
  has_one :cart
  has_one :favorite
end
