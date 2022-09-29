class SneakerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :brand, :amount, :user_id
end
