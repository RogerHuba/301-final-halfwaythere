# 301-final-halfwaythere

A full stack web app that quickly finds the halfway point between two users and gives them a list of different locations to meet.
Created by: Pablo Rosales, Raymond Ruazol, Roger Huba, and Tanner Seramur.

Heroku deployed Site: https://halfwaythereus.herokuapp.com/

-------------
## Motivation
As people have lives that get busier and busier and everything becomes more and more virtual, having the time to get lunch with someone can be a tedious thing to plan. We wanted to find a place that is equal in distance from two remote users so that they can meet quickly so our users can connect more easily with one another.

-------------

## Api Reference
Yelp - https://www.yelp.com/fusion
  Endpoint - /location (The Yelp API call lives inside 'findHalfwayPoint' via promise chain)

Directions - https://developers.google.com/maps/documentation/directions/start
  Endpoint - /location (Beginning of promise chain)

Maps Static - https://developers.google.com/maps/documentation/maps-static/intro
  Endpoint - /location (The Maps Static call lives inside 'findHalwayPoint' via a promise chain)
-------------
## Team

Pablo Rosales - https://github.com/Pablito14
Roger Huba - https://github.com/RogerHuba
Tanner Seramur - https://github.com/TannerSeramur
Ray Ruazol - https://github.com/rpruazol

-------------
## Daily Log: 

### Day1:

Pablo: I created the ReadMe, set up the Kanban board for project management, and helped Roger look into the Google directions API so we can find out how to get a midpoint between two points.

Ray:  I pair programmed with Tanner to get a basic landing page set up with form inputs and a POST HTML route laid out, along with trying to get the information out of our HTML geolocation function working.  On Friday I got the Github Repo up,set up the Postgres SQL database, and set up the basic template files for our project.

Roger:  Completed research on the apache Cordova and attempted to install the application.  Ran into issues with Xcode.  Made a collective decision to go with google location. Researched how to find the midpoint between 2 locations . Used google directions.  Will use to addresses and map the lat / lng or take in 2 lat / lng locations.  Researched formula to find straight line distance between using average lat and average lng.  Still need to research how to account for water / mountains / no road areas.

Tanner:  I helped do all the mockups and wireframes and helped ray set up the repo on Friday.  On Monday I was able to set up the server and get it all organized and connect it to the front-end via server-side rendering using EJS

-------------
### Day2:

Pablo: I was getting the yelp API request to work, and pair programmed with Ray to get our initial schema set up with some dummy data. We also had to collaborate for a while to see what the next move should be for our project.

Ray:  I worked on the heroku deployment issue (I make sure that the deployed heroku page works every morning), and wrote up the schema.sql file with the information of our db schema our group settled on yesterday.

Roger:  Worked with Tanner on getting implementing the calculation for the midpoint of the selected areas.  Passed that waypoint on to Yelp and began to populate the display page.

Tanner:  I worked on getting our data from our api’s and rending it to the front end. Worked with google maps, yelp, etc.. I also played around with apache cordova but don’t think we will end up using it.

-------------
### Day3:

Pablo: I started the "about" ejs file trying to write solid blurbs about each teammate and practiced using professional language to try and make each of us look good and professional without us presenting. I also helped by discussing how our tables should look like regarding what data they stored and how they would be connected.

Ray:  I wrote the save history functionality and retrieval from the page:
https://github.com/rpruazol/301-final-halfwaythere/pull/22

Roger:  Attempted to work on database saving with Pablo.  Came up with normalization for the Database.  Completed research on Twillo texting application.  Sent a test text to Pablo for testing validation. Brought John into the mix to validate db normalization and the project took some turns from there.

Tanner:  I set up the single location view and spent a lot of time getting the map working with ray. I also did the base styles today and a lot of the layout

-------------
### Day4:

Pablo: I helped with creating our about page, which was split into two sections. The first section was about what we had created and what our summary of it is. The second bit was the continent about each individual team member. I took a particularly long time doing this because I was treating it like it was a paper that would be released and I wanted to make everyone look good, professional and be honest about what we had strengths in and that took a while to write. I also was conscientious about the way I was creating the content in the markup so that it would be easy for Tanner to style. I had it created as a draft in JSFiddle just to make sure it was all ok as well.

Ray:  I helped nail down the presentation detail slides, and go over the flow of the presentation itself.

Roger:  Re-work through thought process for the entire app and what MVP should look like.  Team added the map, menu styling, save to database, and additional styling.Found and fixed a bunch of small bugs in the code.  Added the map, menu styling, save to database, and additional styling.  Completed power point.  Did test run run-throughs of presentations.

Tanner:  I spend some time finishing the styles and also testing and debugging whatever errors my team and I found.