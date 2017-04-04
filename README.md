# RestaurantFinder

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Mock Database looks like the following: 
{
  "Rza Dev" : {
    "Shizen Japanese Restaurant" : "0",
    "The Mint Restaurant" : "0",
    "Tim Hortons" : "0",
    "Willie's Cafe & Bakery" : "0"
  },
  "notaza" : {
    "OLO Restaurant" : "0",
    "Tim Hortons" : "0"
  }
}

Each favourite restaurant is stored under the user's Facebook display name. I made the restaurant name the key itself to only have unique restaurant names stored.

## Notes about commit: 
* I did not commit the config keys for Firebase to GitHub for security reasons
* While developing, I was getting the CORS error when I was requesting restaurant names from the Google/Yelp API so, I ended up storing the GET request in a mock service and using that service for testing. Of course, when the app is deployed the mock service would ideally be replaced by the actual Google/Yelp GET request. 

## TODO:
Show a star beside the restaurant that has been marked as user's favourite - will work on this when I have more time...