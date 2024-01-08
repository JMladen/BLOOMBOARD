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

Anybody can use the app to browse and buy plants as a guest.

- Plant Lovers:
  - looking for new and special plant baby
  - looking for gift ideas
  - that want to see want new and eventful in the plant market

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

### Screenshots

See "screenshots" folder

#### Header

![](Header.png)

#### BestSellers

![](BestSellers.png)

#### Benefits

![](Benefits.png)

#### OurCollection

![](OurCollection.png)

#### NewArrivals

![](NewArrivals.png)

#### Footer

![](Footer.png)

#### Footer

![](Explore.png)

### Data

Sample of Curated Server-side Dataset (See more in /server/data):
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
}
]

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

## Install & Run

# client

cd client
npm i
npm start

# server

cd server
npm i
npm start
