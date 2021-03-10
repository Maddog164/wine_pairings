# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
foods = [
    ["Lamb", "Savory", 4],
    ["Lamb Chops", "Savory", 5]
    ["Beef", "Savory", 1],
    ["Hearty Beef Stew", "Savory", 2]
    ["Venison", "Savory", 3],
    ["Chicken", "Savory"]
    ["Mushroom Ragu", "Savory", 6],
    ["Pork", "Savory"],
    ["Souffle", "Sweet"],
    ["Creme Brulee", "Sweet"],
    ["Chocolate Cake", "Sweet"],
    ["Lobster", "Savory"]
]
foods.each do |name, description, wine_id|
    Pairing.create(food_name: name, description: description, wine_id: wine_id)
end

wines = [
    ["Orin Swift Mercury Head", "Red", "Cabernet Sauvignon", "https://www.wine-searcher.com/images/labels/40/49/10154049.jpg?width=466&height=400&fit=bounds"],
    ["Screaming Eagle", "Red", "Cabernet Sauvignon", "https://www.wine-searcher.com/images/labels/87/40/10378740.jpg?width=466&height=400&fit=bounds"],
    ["Molly Dooker Blue Eyed Boy", "Red", "Shiraz", "https://www.wine-searcher.com/images/labels/24/33/10122433.jpg?width=466&height=400&fit=bounds"],
    ["Molly Dooker Enchanted Path", "Red", "Shiraz", "https://www.wine-searcher.com/images/labels/12/08/10261208.jpg?width=466&height=400&fit=bounds"],
    ["Bertani Amarone della Valpolicella Classico DOCG", "Red", "Valpolicella Blend", "https://www.wine-searcher.com/images/labels/11/04/10091104.jpg?width=466&height=400&fit=bounds"],
    ["Far Niente Chardonnay", "White", "Chardonnay", "https://www.wine-searcher.com/images/labels/39/44/10243944.jpg?width=466&height=400&fit=bounds"],



]
