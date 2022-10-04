class SneakerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :brand, :amount, :description, :user_id
end
