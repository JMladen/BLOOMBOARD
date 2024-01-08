# Project Title

## Overview

BloomBoard is a niche digital marketplace for rare plant enthusiasts to find, buy/sell, or trade rare plants and cuttings

### Problem

Retail locations for rare plants tend to be:

- very expensive
- inconvenient to get to
- limitted in product offerings
- and treat the plants poorly

BloomBoard makes it so that users can connect with other "Plant Parents" to find, buy/sell, or trade rare plants and cuttings that are:

- fairly priced
- nearby/conveniently located
- diverse
- and they know have been properly cared for

### User Profile

Anybody can use the app but it is meant to target very dedicated plant enthusiasts, as opposed to the everyday gardener.

### Features

- As a user, I want to be able to find the closest rare plants to my current location or home
- As a user, I want to be able to find the closest rare plants close to any given location
- As a user, I want to be able to see that the other users I interact with our trustable (via a ranking system)
- As a user, I want to be able to create an account
- As a user, I want to be able to login to my account
- As a logged in user, I want to be able to rate other users I've had transactions with

- As a logged in user, I want to be able to send messages to other users.
- As a logged in user, I want to be able to see my transaction history
- As a logged in user, I want to be able to filter plant listings by proximity to current location

## Implementation

### Tech Stack

- React
- TypeScript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

### APIs

- I will likely use the treffle api (https://trefle.io/), google maps api, and maybe a few others if needed

### Sitemap

- Home page
- Plant listings popup window
- Register
- Login

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

Sample Data:

{
"data": [
{
"author": "Schltr.",
"bibliography": "Repert. Spec. Nov. Regni Veg. 16: 358 (1920)",
"common_name": null,
"family": "Orchidaceae",
"family_common_name": null,
"genus": "Aa",
"genus_id": 14887,
"id": 834556,
"links": {
"genus": "/api/v1/genus/aa",
"plant": "/api/v1/plants/aa-achalensis",
"self": "/api/v1/species/aa-achalensis"
},
"plant_id": 423071,
"rank": "species",
"scientific_name": "Aa achalensis",
"slug": "aa-achalensis",
"status": "accepted",
"synonyms": [],
"year": 1920
},
{
"author": "Rchb.f.",
"bibliography": "Xenia Orchid. 1: 18 (1854)",
"common_name": null,
"family": "Orchidaceae",
"family_common_name": null,
"genus": "Aa",
"genus_id": 14887,
"id": 834557,
"links": {
"genus": "/api/v1/genus/aa",
"plant": "/api/v1/plants/aa-argyrolepis",
"self": "/api/v1/species/aa-argyrolepis"
},
"plant_id": 423072,
"rank": "species",
"scientific_name": "Aa argyrolepis",
"slug": "aa-argyrolepis",
"status": "accepted",
"synonyms": [
"Altensteinia argyrolepis"
],
"year": 1854
}, // ... 28 more items
],
"links": {
"first": "/api/v1/species?page=1",
"last": "/api/v1/species?page=20865",
"next": "/api/v1/species?page=2",
"self": "/api/v1/species"
},
"meta": {
"total": 417293
}
}

### Endpoints

TBD

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in various places

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create a style template
  -mixing, padding, typography, etc

- Feature: Home page

  - Subfeature: Plant Listings map

    - Implement Plant Listings section including filters, map, etc
    - Create GET /plants endpoint

  - Subfeature: Plant Listings list
    - Implement a list to the right of the map that is autofiltered by the map

- Feature: Plant Listings popup

  - Implement a popup window, activated when a plant listing is selected, that shows more info about the listing

- Feature: Create account

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens
  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

## Nice-to-haves

- Forgot password functionality
- Expanded user information: full name, plant type
- Add wishlist for users to add plants
