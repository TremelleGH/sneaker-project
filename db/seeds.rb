# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Deleting user/sneaker data..."
User.destroy_all
Sneaker.destroy_all
Favorite.destroy_all
Sneaker.destroy_all

puts "Creating users..."
u1=User.create(first_name: 'Tremelle', last_name: 'Ancrum', avatar: '', username: 't123', email: 'tancrum1996@gmail.com', admin: true, password: '123')
u2=User.create(first_name: 'John', last_name: 'Doe', avatar: '', username: 't1234', email: 'crum1996@gmail.com', admin: true, password: '1234')
u3=User.create(first_name: 'T', last_name: 'A', avatar: '', username: 't12345', email: 'ancrum1996@gmail.com', admin: true, password: '12345')



puts "Creating favorites..."
f1=Favorite.create(user_id: u1.id)
f2=Favorite.create(user_id: u2.id)
f3=Favorite.create(user_id: u3.id)


puts "Creating carts..."
c1=Cart.create(user_id: u1.id)
c2=Cart.create(user_id: u2.id)
c3=Cart.create(user_id: u3.id)


puts "Creating sneakers..."
s1=Sneaker.create(name: 'LeBron 19', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/465ab10b-d24f-4d78-98eb-f94db71fbdbd/lebron-19-basketball-shoes-VkqHgW.png', price: 99.97, brand: 'Nike', user_id: u1.id, favorite_id: f1.id, cart_id: c1.id, amount: 1)
s2=Sneaker.create(name: 'Air Jordan 3 Retro', image: 'https://images.stockx.com/images/Air-Jordan-3-Retro-Fire-Red-2022.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1658172320&q=75', price: 230, brand:'Jordan', user_id: u2.id, favorite_id: f2.id, cart_id: c2.id, amount: 1)
s3=Sneaker.create(name: 'Jordan ADG 4',  image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/18f63d14-3acc-44e0-b198-c4b7c91d1d6d/jordan-adg-4-mens-golf-shoes-zw1ZGK.png', price: 185, brand:'Nike', user_id: u3.id, favorite_id: f3.id, cart_id: c3.id, amount: 1 )
s4=Sneaker.create(name: 'Nike Air Zoom Pegasus 39', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/57dd56da-b069-4c63-bece-4810c1067215/air-zoom-pegasus-39-mens-road-running-shoes-d4dvtm.png', price: 130, brand: 'Nike', user_id: u1.id, favorite_id: f1.id, cart_id: c1.id, amount: 1 )
s5=Sneaker.create(name: 'Nike React Infinity Run Flyknit 3', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f99c00c5-9286-4c9d-b3aa-20e3c16149ac/react-infinity-run-flyknit-3-womens-road-running-shoes-XpNmlR.png', price: 160, brand: 'Nike', user_id: u2.id, favorite_id: f2.id, cart_id: c2.id, amount: 1)
s6=Sneaker.create(name: 'NikeCourt Zoom Pro', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4fbc8ead-69be-4a94-8e41-a3566c510d48/nikecourt-zoom-pro-mens-hard-court-tennis-shoes-c5mPwW.png', price: 100, brand: 'Nike', user_id: u3.id, favorite_id: f3.id, cart_id: c3.id, amount: 1)
s7=Sneaker.create(name: 'Nike Air Max 97', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cuvuokzz86meuxcssbma/air-max-97-mens-shoes-LJmK45.png', price: 175, brand: 'Nike', user_id: u1.id, favorite_id: f1.id, cart_id: c1.id, amount: 1)

puts "Done Seeding"