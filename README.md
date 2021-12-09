# Weather App Full Stack Project
<p>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>
 :rocket: 1. Overview

## :rocket: INTRO
There are a lot of different weather apps on the market. Most of them get their information from some API and display it in a way that looks nice on your phone or desktop.
You’re going to be creating your own weather app with the full stack!
In this project you will write a client using OOP and MVC design, create a server, access an external API from your server, and save data to a database with CRUD operations.
Weather you’re ready or not, let’s go!
## :rocket: PACKAGE REQUIREMENTS
- You’ll need the following packages for this project with `yarn` or `npm install`.
  - body parser
  - express
  - handlebars
  - jQuery
  - mongoose
  - axios
 ## :rocket: WHETHER WEATHER
- You should work on this project in steps:
  - Set up the server
  - Set up your Schemas and DB
  - Get data from the external API
  - Set up the routes on your server
  - Set up your client (MVC & OOP)
  - Work on your Model
  - Work on your Renderer (View)
  - Work on your Controller
  - Design (for mobile!)
#### SERVER
Your express server should have a normal set up. Make sure to include a model folder with a City.js file.
### DB SCHEMA
Your DB schema in your City.js file should have the following:
name, a string
temperature, a number
condition, a string
conditionPic, a string
### EXTERNAL API
There are a lot of different weather APIs you can work with. We recommend using open weather map as it’s free and fairly simple. But you’re free to use a different API if you’d like.
Note: If you choose to use a different API, do not spend more than 30 minutes trying to figure it out, as this is not the point of this project. The rest of the API directions will be tailored for open weather map.
You’ll need to sign up in whichever way you prefer. Once you do, you’ll be redirected to a page which provides you with your API key. You’ll need to use this to query the API, so save it as a variable in your server somewhere.
Now that you have access to the external API:
Read over the documentation, it’s really thorough and nice
On your server, set up a route that makes a request to the API
Query the API for a city of your choice, you wan’t the current data to start with
Use postman to test at this point
### SERVER ROUTES
You should have the following routes on your server:
A get route to /city
This route should take a cityName parameter and return the city data in a response.
Hint: The city is not yet saved in your DB.
A get route to /cities
This route should find all of the city data saved in your DB, and send it to the client
A post route to /city
This route should save a new City to your DB
A delete route to /city
This route should take a cityName parameter and delete the correct city from your DB
#### CLIENT
For your client you’ll need to have a dist folder with a your files separated correctly. You must keep this fully MVC compliant.
### YOUR MODEL
Here’s what should go inside your model class:
An array of cityData - This will hold all the cities we want to display on the client side
A getDataFromDB method, which sends a GET request to the /cities route on your server and update the cityData array
A getCityData method , which sends a GET request to the /city route on your server
Hint: async
When the data comes back, you need to make sure that it is added to your models data (cityData).
A saveCity method, sends a city’s data as POST request to the /city post route on your server and update the cityData array
Make sure this is MVC compliant
A removeCity method, which sends a DELETE request to the /city delete route on your server and update the cityData array
Also should be MVC compliant
Note: If you need more in depth instructions, check out this README file.
### YOUR VIEW
Here’s what should go inside of your Renderer class:
A method renderData which appends data to the HTML
Though it’s not explicitly part of your render class, you also need to add in your Handlebars template to your HTML.
### YOUR CONTROLLER
Your controller should have the following:
A loadPage function, which should render any saved data
This function should run when the page loads
A handleSearch function, which should call to the server and render new weather data for the specific city the user searched for.
Hint: This function needs to be async to work
An on click for your search button, which calls your handleSearch function as it’s callback function
An on click for each of the save buttons that:
Saves that city in your DB
An on click for each of the remove buttons that:
Deletes that city from your DB
