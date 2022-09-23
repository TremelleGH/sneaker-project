class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :avatar, :username, :email, :admin, :password
  has_many :sneakers
end
