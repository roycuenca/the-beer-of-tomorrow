# React Native Expo App with Punk API Integration

This is a React Native Expo application that utilizes the Punk API to display information about beers. The app allows users to search for beers based on food pairing and beer name. Additionally, users can view detailed information about each beer.

## Table of Contents
- Screenshots
- Features
- Installation
- Usage
- API Integration

## ScreenShoots

![theBeerOfTomorrow](https://github.com/roycuenca/the-beer-of-tomorrow/assets/38863724/9fe48568-8e7b-43d0-a755-1610cf0f0b0b)

## Features

- Search for beers based on food pairing.
- Search for beers by beer name.
- View detailed information about each beer.

## Installation

1. Clone this repository to your local machine.
   
   ```sh
   git clone https://github.com/roycuenca/the-beer-of-tomorrow.git
   ```
2. Navigate to the project directory.

   ```sh
    cd the-beer-of-tomorrow
   ```
3. Install the required dependencies using npm or yarn.

   ```sh
    npm install
    # or
    yarn install
   ```
4. Install Expo globaly:

    ```sh
    npm install -g expo-cli
    # or
    yarn  install -g expo-cli
   ```
5. Start the Expo app with:

    ```sh
    npm run ios
    # or
    yarn ios
   ```

6. Generate Tests:
   app utilizes Jest for testing purposes. To run tests, use the command npm run test. Jest ensures our code's quality by providing       efficient testing capabilities, helping us identify and resolve issues quickly.

   ```sh
    npm run test
   ```


## API Integration

The app integrates with the Punk API to fetch beer data. It uses the following endpoints:

- GET /beers: Get a list of beers.
- GET /beers?food=food: Get beers based on food pairing.
- GET /beers?beer_name=name: Get beers by beer name.
- GET /beers/{beer_id}: Get detailed information about a specific beer.

Make sure to review [the Punk API documentation](https://punkapi.com/documentation/v2) for more details on how to use these endpoints.
