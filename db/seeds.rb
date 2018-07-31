# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Beach.destroy_all

jamaica = Beach.new
jamaica.name = "Negril"
jamaica.image = "https://media-cdn.tripadvisor.com/media/photo-s/0c/20/3d/23/beach-paradise.jpg"
jamaica.save

review1 = jamaica.review.create(title: 'Great Escape!', description: 'best beach ever')
review2 = jamaica.review.create(title: 'Meh', description: 'it rained to much')
review3 = jamaica.review.create(title: 'I am not leaving', description: 'Who can go back home after this? Not me. I refuse.')

bahamas = Beach.create(name: 'Nassau', image: 'http://1.bp.blogspot.com/-ViLm4NB2KWU/VXg_yC3oNrI/AAAAAAAAbAc/qI2GaLpbdrY/s1600/IMG_2944.jpg')

review1 = bahamas.review.create(title: 'I like this', description: 'would come again')
review2 = bahamas.review.create(title: 'Clear skies', description: 'paradise')
review3 = bahamas.review.create(title: 'Fun Natives', description: 'great people, great times')

usvi = Beach.create(name: 'St. Croix', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/86/fc/be/best-beach-ever-buck.jpg')

review1 = usvi.review.create(title: 'Great Food!', description: 'nom noms')
review2 = usvi.review.create(title: 'The Beach House', description: 'maxys house was great')
review3 = usvi.review.create(title: 'USVI University', description: 'fun students')
