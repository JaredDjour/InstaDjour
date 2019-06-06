require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all



demo_user = User.create({username: "DemoUser", password: "DemoUser", email: "DemoUser@gmail.com", full_name: "Demo User"});
memer = User.create({username: "MemeGuy", password: "MemeGuy", email: "MemeGuy@gmail.com", full_name: "Meme Guy"});
# traveler = User.create({username: "Traveler", password: "Traveler", email: "Traveler@gmail.com", full_name: "Traveler"});
desserts = User.create({username: "JustDesserts", password: "JustDesserts", email: "JustDesserts@gmail.com", full_name: "Just Desserts"});

post1 = Post.create!(caption: "Adventure is out there", user_id: demo_user.id)
post2 = Post.create!(caption: "Mama's Boy", user_id: memer.id)
# post3 = Post.create!(caption: "Peaceful", user_id: traveler.id)
post4 = Post.create!(caption: "Cooookies", user_id: desserts.id)
# post5 = Post.create!(caption: "Will this show up", user_id: demo_user.id)
post6 = Post.create!(caption: "Customers are the best", user_id: memer.id)
# post7 = Post.create!(caption: "Relax", user_id: traveler.id)
post8 = Post.create!(caption: "Mmmmmmm", user_id: desserts.id)
# post9 = Post.create!(caption: "Mama's boy for life", user_id: demo_user.id)
post10 = Post.create!(caption: "It's tough", user_id: memer.id)
# post11 = Post.create!(caption: "Oh it showed up", user_id: traveler.id)
post12 = Post.create!(caption: "Dough-not eat these! --Stella Yin Wong", user_id: desserts.id)

post13 = Post.create!(caption: "Thank you, thank you.", user_id: memer.id)



file1 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/balloons.jpg')
post1.photo.attach(io: file1, filename: 'balloons.jpg')


file2 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/moms3.jpg')
post2.photo.attach(io: file2, filename: 'moms3.jpg')

# file3 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/view.jpg')
# post3.photo.attach(io: file3, filename: 'view.jpg')

file4 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/dessert.jpg')
post4.photo.attach(io: file4, filename: 'dessert.jpg')

# file5 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/balloons.jpg')
# post5.photo.attach(io: file5, filename: 'balloons.jpg')

file6 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/cashier.jpg')
post6.photo.attach(io: file6, filename: 'cashier.jpg')

# file7 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/sea.jpg')
# post7.photo.attach(io: file7, filename: 'sea.jpg')

file8 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/chocolate_chip_cookies.jpg')
post8.photo.attach(io: file8, filename: 'chocolate_chip_cookies.jpg')

# file9 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/moms3.jpg')
# post9.photo.attach(io: file9, filename: 'moms3.jpg')

file10 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/ugly2.jpg')
post10.photo.attach(io: file10, filename: 'ugly2.jpg')

# file11 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/balloons.jpg')
# post11.photo.attach(io: file11, filename: 'balloons.jpg')

file12 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/donuts.jpg')
post12.photo.attach(io: file12, filename: 'donuts.jpg')

file13 = open('https://instadjour-seeds.s3.us-east-2.amazonaws.com/closing.jpg')
post13.photo.attach(io: file13, filename: 'closing.jpg')


