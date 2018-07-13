# Project proposal
Bark Park  - Dog park check-in app

## Project Description
Bark Park is an app for dog owners to use to check who's currently at their local dog park and see how long they will be there. Owners can sign up for an account and add a profile for their dogs, then check in and out of a dog park for other users to see.

## Problem statement
Taking your dog to the dog park can be a hit or miss on how many dogs will be there, depending on what time you go. This app will allow dog owners to see which dogs are currently at their favorite dog park, see how long those dogs will be there, and see which dogs plan to be there later that day. 

## How will your project solve this problem?
This app will allow dog owners to sign up for a profile. The user will be able to add a profile for each of their dogs with some basic information about them. The user will be able to check in and out of their favorite dog park, or add times that they plan on being there later that same day. Other users will be able to select a specific dog park and see which dogs are currently there and which dogs plan to be there later that day.

## Map the user experience
From the landing page, the user will be able to sign into their account/profile. The owner can:
  1) View a list of local dog parks
  2) Select a dog park
    a) Check in or out of that dog park as the arrive or leave
      i) User can set times they plan to be at the park as they check-in
  3) Add times they plan to arrive and leave for later that same day
  4) Add/update/remove their own and their dogs' profile information

## What technologies do you plan to use?
I plan to use React Native as my new technology for the front-end to make this app mobile friendly. I will use Express, Knex.js, Postgres for the backend, with cypress for end-to-end testing.


## Stretch Goals
I would like to use Auth for dog owners to be able to sign in and have their own profiles with usernames and passwords

I would also like to integrate push notifications for users that forget to check-out as they leave the park after a certain amount of time has passed since they checked-in