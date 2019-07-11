# require 'open-uri'
# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all
Follow.destroy_all

demo_user = User.create({username: "DemoUser", password: "DemoUser", email: "DemoUser@gmail.com", full_name: "Demo User"});
jane = User.create({username: "JaneDoe", password: "JaneDoe", email: "JaneDoe@gmail.com", full_name: "Jane Doe"});
john = User.create({username: "JohnTho", password: "JohnTho", email: "JohnTho@gmail.com", full_name: "John Tho"});

post1 = Post.create!(caption: "I think your house is flying", user_id: demo_user.id)
post2 = Post.create!(caption: "Beautiful sight", user_id: jane.id)
post3 = Post.create!(caption: "Peaceful", user_id: john.id)
post4 = Post.create!(caption: "Cooookies", user_id: demo_user.id)
post5 = Post.create!(caption: "I don't think this party's kosher but the picture's nice", user_id: jane.id)
post6 = Post.create!(caption: "Will I sink to the bottom", user_id: john.id)
post7 = Post.create!(caption: "Relax", user_id: demo_user.id)
post8 = Post.create!(caption: "Mmmmmmm", user_id: jane.id)
post9 = Post.create!(caption: "Purple's the color of royalty", user_id: john.id)
post10 = Post.create!(caption: "Rainbow roses", user_id: jane.id)
post11 = Post.create!(caption: "Under the Sea", user_id: demo_user.id)
post13 = Post.create!(caption: "Enjoy the view", user_id: john.id)
post14 = Post.create!(caption: "Sightseeing", user_id: demo_user.id)
post15 = Post.create!(caption: "Travel with anyone other than John", user_id: jane.id)
post16 = Post.create!(caption: "Under my umberrrella ella ella ", user_id: john.id)
# post17 = Post.create!(caption: "Thank you, thank you.", user_id: demo_user.id)


file1 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/balloons.jpg')
post1.photo.attach(io: file1, filename: 'balloons.jpg')

file2 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/city.jpg')
post2.photo.attach(io: file2, filename: 'city.jpg')

file3 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/night.jpg')
post3.photo.attach(io: file3, filename: 'night.jpg')

file4 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/dessert.jpg')
post4.photo.attach(io: file4, filename: 'dessert.jpg')

file5 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/party.jpg')
post5.photo.attach(io: file5, filename: 'party.jpg')

file6 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/playpin.jpg')
post6.photo.attach(io: file6, filename: 'playpin.jpg')

file7 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/sea.jpg')
post7.photo.attach(io: file7, filename: 'sea.jpg')

file8 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/chocolate_chip_cookies.jpg')
post8.photo.attach(io: file8, filename: 'chocolate_chip_cookies.jpg')

file9 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/purple.jpg')
post9.photo.attach(io: file9, filename: 'purple.jpg')

file10 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/rose.jpg')
post10.photo.attach(io: file10, filename: 'rose.jpg')

file11 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/sea.jpg')
post11.photo.attach(io: file11, filename: 'sea.jpg')

file13 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/sight1.jpg')
post13.photo.attach(io: file13, filename: 'sight1.jpg')

file14 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/sight2.jpg')
post14.photo.attach(io: file14, filename: 'sight2.jpg')

file15 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/sight3.jpg')
post15.photo.attach(io: file15, filename: 'sight3.jpg')

file16 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/umbrellas.jpg')
post16.photo.attach(io: file16, filename: 'umbrellas.jpg')
