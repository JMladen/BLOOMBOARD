# Project Title

BLOOMBOARD

## Overview

BLOOMBOARD is a visually attractive and user friendly web application on which users may purchase rare plants.

### Problem

Online plant eCommerce sites tend to be:

- very expensive
- difficult to use
- aesthetically uninspiring (to say the least)
- and mistreat the plants during shipping

BLOOMBOARD makes it so that users can purchase rare plants, with ease and peace of mind. BLOOMBOARD's offerings are:

- fairly priced
- easy to navigate for the user
- diverse in variety
- and are hand delivered to mitigate the risks of shipping

### Users

Anybody with an internet connection can use the app to browse and buy plants as a guest.

### Features

- As a user, I want to be able to easily navigate an online plant store
- As a user, I want to be able to access the majority of the functionality of the site without creaing an account
- As a user, I want to be able to purchase a plant without creating an account
- As a user, I want to know that the plants I am purchasing are in great condition and have not been significantly dmaaged in transport
- As a user, I want to be able to view product both common and rare plant offerings
- As a user, I want to be able to filter through the catalogue of available plants based on the plant colloquial name

## Implementation

### Tech Stack

- React
- Express
- Client libraries:

  - react
  - react-router
  - react-router-dom
  - react-icons
  - axios
  - tailwindcss

- Server libraries:
  - express
  - node.js

### APIs

- None are being used in the current iteration of this app

### Sitemap

- Home page
- Explore page
- Shopping cart page (in progress)

### Mockups

#### Home Page

![](Home page.jpg)

#### Home Page

![](Selected plant listing popup window.jpg)

#### Register Page

![](Login page and Signup page.jpg)

#### Login Page

![](Login page and Signup page.jpg)

### Data

Curated Server-side Dataset:
[
{
"type": "Anthurium",
"id": 1,
"subtype": "Anthurium Waroc. 'Med'",
"desc": "A stunning tropical with long dark green leaves. It is one of the most desirable plants by beginners and advanced houseplant enthusiasts.",
"humidity": "High",
"light": "Indirect",
"water": "As Needed",
"temp": 13,
"price": 75,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/5555/58E4/ED75/54BB/1B29/C0A8/DA44/D91F/Anthurium_warocqueanumweb1_ml.jpeg"
},
{
"type": "Anthurium",
"id": 2,
"subtype": "Anthurium Amzn Diamond",
"desc": "A cross between Anthurium Regale and Nigrolaminum, combining the long-stemmed, majestic habit of the former, with the rubbery, sturdy texture and the dark color of latter. Not suitable for beginners.",
"humidity": "High",
"light": "Indirect",
"water": "As Needed",
"temp": 13,
"price": 80,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/644D/2CA0/8E92/2735/187D/2D4C/700B/5A7F/Amazon_Diamond__8216_Inverse_8217__ml.JPG"
},
{
"type": "Anthurium",
"id": 3,
"subtype": "Anthurium Luxurians 'Big'",
"desc": "This gorgeous tropical is found in the rainforests of Columbia. It's textured surface reflects light unlike other Anthuriums, adding an elegant vibrance to any room.",
"humidity": "High",
"light": "Indirect",
"water": "As Needed",
"temp": 12,
"price": 85,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/5CE5/803C/4A86/985B/7102/C0A8/DA44/0B0A/Anthurium_luxurians_one_ml.JPG"
},
{
"type": "Anthurium",
"id": 4,
"subtype": "Anthurium Raven Soul",
"desc": "Anthurium Raven Soul",
"humidity": "High",
"light": "Indirect",
"water": "As Needed",
"temp": 15,
"price": 200,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/628F/C1B1/D3E2/1912/316A/2D4C/700B/543D/Anth._Ravel_Soul_Dark_ml.JPG"
},
{
"type": "Anthurium",
"id": 5,
"subtype": "Anthurium papillilaminum",
"desc": "Anthurium papillilaminum",
"humidity": "High",
"light": "Indirect",
"water": "As Needed",
"temp": 15,
"price": 140,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/64A5/7652/517B/886A/B9EF/2D4C/700B/2E47/Anth._papillilaminum_ml.JPG"
},
{
"type": "Monstera",
"id": 6,
"subtype": "Monstera Delicosa",
"desc": "Monstera Delicosa",
"humidity": "Low",
"light": "Indirect",
"water": "As Needed",
"temp": 10,
"price": 30,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/5D6E/CC17/FA72/3714/2DC1/C0A8/DA44/8763/Monstera_deliciosa2.jpg"
},
{
"type": "Monstera",
"id": 7,
"subtype": "Monstera adansonii",
"desc": "Monstera adansonii",
"humidity": "Low",
"light": "Indirect",
"water": "As Needed",
"temp": 10,
"price": 35,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/5DDD/7B08/06CB/B9A7/BDA3/C0A8/DA44/ABAC/Monstera_adansonii_ml.JPG"
},
{
"type": "Monstera",
"id": 8,
"subtype": "Monstera Thai Constellation",
"desc": "Monstera Thai Constellation",
"humidity": "Low",
"light": "Indirect",
"water": "As Needed",
"temp": 10,
"price": 75,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/62D0/962D/AE7D/2F54/7363/2D4C/700B/07C8/Monstera_Thai_Constellation_plant_ml.JPG"
},
{
"type": "Monstera",
"id": 9,
"subtype": "Monstera obliqua Perú",
"desc": "Monstera obliqua Perú",
"humidity": "Low",
"light": "Indirect",
"water": "As Needed",
"temp": 10,
"price": 120,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/61C4/BC35/BA17/72EC/9B01/2D4C/700B/E4F2/Monstera_obliqua_peru_ml.JPG"
},
{
"type": "Monstera",
"id": 10,
"subtype": "Monstera dubia",
"desc": "Monstera dubia",
"humidity": "Low",
"light": "Indirect",
"water": "As Needed",
"temp": 10,
"price": 30,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/60E0/8D78/A8D4/FADB/4195/C0A8/DA02/49B0/Monstera_dubia_ml.jpeg"
},
{
"type": "Orchid",
"id": 11,
"subtype": "Cattleya intermedia coerulea Gigi",
"desc": "Cattleya intermedia coerulea Gigi",
"humidity": "Low",
"light": "Indirect",
"water": "As Needed",
"temp": 17,
"price": 120,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/6398/9568/74CB/5DA3/E041/2D4C/700B/A08D/Cattleya_intermedia_coerulea_Gigi_ml.jpg"
},
{
"type": "Orchid",
"id": 12,
"subtype": "Paphiopedilum rothschildianum 'Green Valley x Fly Eagle'",
"desc": "Paphiopedilum rothschildianum 'Green Valley x Fly Eagle'",
"humidity": "Medium",
"light": "Indirect",
"water": "As Needed",
"temp": 16,
"price": 150,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/6397/8644/EB16/F981/2A54/2D4C/700B/F481/Paphiopedilum_rothschildianum_Green_Valley_x_Fly_Eagle_ml.jpg"
},
{
"type": "Orchid",
"id": 13,
"subtype": "Laelia superbiens alba",
"desc": "Laelia superbiens alba",
"humidity": "Low",
"light": "Indirect",
"water": "As Needed",
"temp": 17,
"price": 90,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/638F/3983/4FA0/80F7/E81A/2D4C/700B/DAD2/Laelia_superbiens_alba__ml.JPG"
},
{
"type": "Orchid",
"id": 14,
"subtype": "Maxillaria sanderiana black lip",
"desc": "Maxillaria sanderiana black lip",
"humidity": "Medium",
"light": "Indirect",
"water": "As Needed",
"temp": 15,
"price": 35,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/5F4A/697B/3ED8/AF4A/D1B7/C0A8/DA02/887F/Maxillaria_sanderiana_black_lip2_ml.JPG"
},
{
"type": "Orchid",
"id": 15,
"subtype": "Cattleya maxima 'Muñequita' x 'Roy'",
"desc": "Cattleya maxima 'Muñequita' x 'Roy'",
"humidity": "Low",
"light": "Indirect",
"water": "As Needed",
"temp": 14,
"price": 50,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/6409/D837/2932/FA42/DD91/2D4C/700B/FCB8/Cattleya_maxima_Munequita_x_Roy_ml.jpg"
},
{
"type": "Philodendron",
"id": 16,
"subtype": "Philodendron mamei Silver",
"desc": "Philodendron mamei Silver",
"humidity": "Medium",
"light": "Indirect",
"water": "As Needed",
"temp": 11,
"price": 85,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/5FFF/A54B/4937/5DD3/8A62/C0A8/DA02/E3A1/Philodendron_mamei_silver_plantc_ml.JPG"
},
{
"type": "Philodendron",
"id": 17,
"subtype": "Philodendron Vibes",
"desc": "Philodendron Vibes",
"humidity": "High",
"light": "Indirect",
"water": "As Needed",
"temp": 10,
"price": 90,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/5FFF/A54B/4937/5DD3/8A62/C0A8/DA02/E3A1/Philodendron_mamei_silver_plantc_ml.JPG"
},
{
"type": "Philodendron",
"id": 18,
"subtype": "Philodendron verrucosum Amazon Sunset",
"desc": "Philodendron verrucosum Amazon Sunset",
"humidity": "High",
"light": "Indirect",
"water": "As Needed",
"temp": 11,
"price": 80,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/60D7/37A9/09F3/1E34/52C5/C0A8/DA02/15A3/P_Verrucosum_Amazonsunset_back_ml.JPG"
},
{
"type": "Philodendron",
"id": 19,
"subtype": "Philodendron verrucosum hummingbird",
"desc": "Philodendron verrucosum hummingbird",
"humidity": "",
"light": "Indirect",
"water": "As Needed",
"temp": 10,
"price": 90,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/6269/5C7F/C262/2CED/F9BF/2D4C/700B/CAE6/Philodendron_verrucosum_hummingbird_back_ml.JPG"
},
{
"type": "Other",
"id": 20,
"subtype": "Columnea flexiflora",
"desc": "Columnea flexiflora",
"humidity": "Low",
"light": "Indirect",
"water": "As Needed",
"temp": 15,
"price": 40,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/596A/128F/824D/A619/6EA0/C0A8/DA44/1AD7/Columnea_flexiflora._ml.JPG"
},
{
"type": "Other",
"id": 21,
"subtype": "Cattleya Orange Delight",
"desc": "Cattleya Orange Delight",
"humidity": "Medium",
"light": "Indirect",
"water": "As Needed",
"temp": 15,
"price": 70,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/640F/4EB3/3515/0FEA/6702/2D4C/700B/F33B/Catt._luteola_x_Laelia_harpophylla_ml.JPG"
},
{
"type": "Other",
"id": 22,
"subtype": "Oncidium Leoquina",
"desc": "Oncidium Leoquina",
"humidity": "High",
"light": "Indirect",
"water": "As Needed",
"temp": 15,
"price": 140,
"img": "https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/6465/4A33/7C75/2426/85AD/2D4C/700B/145F/Oda._Gael_Gettel_x_alexandrae-removebg-preview_ml.png"
}
]

### Endpoints

TBD

### Auth

There is no authentication at the moment.

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing

- Feature: Home page

  - Subfeature: Header

    - Includes nav bar, hero image and a button linking to the explore page

  - Subfeature: Bestseller

    - Implement a section showing plants that users will liekly enjoy

  - Subfeature: Benefits

    - Implement a section that denotes the benefits of having plants nearby

  - Subfeature: OurCollection

    - Implement a filterable catalogue of plant offerings that is easy to navigate and easthetically appealing

  - Subfeature: NewArrivals

    - Implement a section where recurring users may view the newest plant offerings

- Feature: Footer

  - Implement a footer linking to BLOOMBOARD's socials

- Feature: Explore

  - Create a separate page from the homepage that is also filterable, easily navigable and allows users to add items to their cart

## Lesson Learned

- At the start of the project, it is easy to become enamoured by many different pieces of functionality that you want to add. This can lead to producing a lot of work that is only partially functional. In the future I will be setting my goals with minimal fucntionality and building up from there.
- Do not rename folders locally if they contain an entire git repository as it will cause many errors and cause you to lose many git commits.
- Authorization takes far longer than expected.
- In the future, while it is useful to review other works in similar applications, it's important to acknowledge that the web development space is an everchanging environment. What worked for one may not work for another, but the concept they have built may. There is no substitute for critical thinking.
- Do not underestimate the length of time that styling requires. Even if using a previously made library such as tailwind, while it will save you some time it will not eliminate the requirement to do additional styling.
- It's easy to look at other websites, click a button, and be underwhelmed by the outcome of it. However, the amount of effort, man-hours, creativity, and critical thinking it took to implement that functionality could be massive; so keep it simple.

## Next Steps

- Create account
- Login to account
- Forgot password functionality
- Order history
- Wishlist for users to favourite plants they desire
- User recommended offerings
- User reviews

## Installation

### Dependencies

In your server you must install:

- npm i
- npm i express
- npm i cors

In your client you must install:

- tailwindcss
- react-icons

When I ask chatGPT to explain this "like a grandma", she says the following:
"
Sure thing! If I were explaining it like a grandma:

Open the door to your computer home:

Make sure you have Node.js and npm installed. If not, go to Node.js website, download, and install it.
Gather the ingredients (packages):

Open a cozy terminal or command prompt in your app's folder.
Install the packages:

Type npm install react react-dom react-router-dom and press Enter.
Wait for the magic to happen. This installs React and some tools to make it work.
Add some flair (install styles):

Type npm install node-sass and press Enter.
This will make your app look stylish.
Fetch the things (installing dependencies for your app):

Type npm install and press Enter.
This will read your "package.json" and fetch all the needed things.
Start the show:

Type npm start and press Enter.
Your app will start dancing on http://localhost:3000 in your browser.
Enjoy your creation:

Open your web browser and go to http://localhost:3000.
You should see your app smiling back at you.
If you ever need to stop the show, go back to the cozy terminal and press Ctrl + C (or Cmd + C on a Mac).

Remember, if you get stuck or need help, don't hesitate to ask your friendly assistant (or me)! 🌟
"
