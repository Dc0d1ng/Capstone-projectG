# Project Title

Roll 4 Games

## Overview

What is your app?

Sometimes we end in a situation where we're with friends and have spare time to spend,
but you don't have an idea on which game to play or you want to try something new

Enter Roll 4 Games, your board games selector/randomizer!

### Problem

Why is your app needed? Background information around any pain points or other reasons.

Humans make hundreds of decisions every single day and this takes out the guesswork of having to think of what to play
You would only need to put in a few selections and HIT THAT BUTTON!

### User Profile

Who will use your app?

Anyone who wants to play board games with others

How will they use it?

Simple, intuitive and clean UI will help people get started quickly
User login will save favourites to pull data from

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details.

Recommend me a game using these selections
(radio selector?)

Number of players 2-8 max
time 5-10mins, 15-30, 30-1hr, 2hrs etc (reduce the options)
Beginner, intermediate, advanced
(Complexity of game)
Will populate a list of games (with a summary/details for each card)
Adding a favourites icon/button

Additional features
==========================
submit button that randomly selects based on preferences
Database with user and favourites (add, delete favourites)

## Implementation

### Tech Stack

Use axios to make a post request for signup/login
Server side database with user, games and favourites

### APIs

List any external sources of data that will be used in your app

using boardgamegeek API
https://boardgamegeek.com/wiki/page/BGG_XML_API&redirectedfrom=XML_API#toc3
If unable to, will build a database with 30 games

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.
Landing page - app logo, user signup/login, start button
Choose page - app logo, radio selectors with players, difficulty and length
Cards page - max 5 games, cards will show up based on radio buttons on previous page, will have a toggle for favourites

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

Excalidraw-mockup in root folder

### Data

axios.post
response handling
try catch
useState, useEffect, useParams
mySQL

### Endpoints

localhost:5173
/choose
/choose/selected
/choose/selected/players/difficulty/length

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

TBD

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Due to the nature of this project, most of the time will be spent building the front-end (70-80%)
Landing page, Choose page, Cards Page
Forms and onSubmit
then connecting it to the backend (20-30%)
Signup/Login/Database

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. 
Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Recommended section of popular games
TOP 10 hottest games
How to play section with videos/tutorials of the games selected (linking to another page ala brainflix)
Currently discounted games
