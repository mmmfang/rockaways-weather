#How's the Water?
A Marine Weather App

Find out the water temperature and swell for your next surf, swim or boating session!

* Technologies Used: NodeJS and Express as server, Angular to render front-end, Materialize for CSS styling, external APIs - World Weather Online and Google Maps

* Learned: How to hide my API key by requesting API server side and storing key in .env which is hidden from Github. How to use external weather API and parse the data to render the values I want using Angular.

To Do List: 
* currently the weather is hard coded to pull from one location, the Rockaways, and the map is currently set there as well. I haven't implemented a Mongo database but plan to have a schema to store - lat, long and location name - so users can save their weather location. 
* The google map is hardcoded to one location and just is a static map. Plan to allow the user to click on the map to get their lat/long, so they can save that preference.
* Possibly send user an email or text if they click on a specific forecast they want to receive.
