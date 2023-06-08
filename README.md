# Scroll Mango

## Introduction

This project showcases the Scroll Mango component, a custom range component built using React.js. It offers two buttons on the main view, where one leads to localhost:8080/exercise1, and the other to localhost:8080/exercise2.

## Exercise instructions

Exercise 1: 
In this exercise, the Scroll Mango component is designed with the following features:

* The user can drag two bullets along the range line.
* The user can click on the currency number label values (min or max) and manually enter a new value.
* The value entered will be constrained within the min and max input values.
* When hovering over a bullet, it increases in size and changes the cursor to a draggable icon.
* Dragging a bullet changes the cursor to indicate dragging.
* The min value and max value cannot be crossed within the range.
* A mocked HTTP service is provided to retrieve the min and max values to be used in the component.

Exercise 2: 
In this exercise, the Scroll Mango component has the following characteristics:

* The component is based on a predefined range of values: [1.99, 5.99, 10.99, 30.99, 50.99, 70.99]. Users can only select values from this range and cannot manually enter values.
* A mocked HTTP service is provided to retrieve the array of numbers: [1.99, 5.99, 10.99, 30.99, 50.99, 70.99].
* Currency values are displayed as labels and cannot be changed through input.
* The user can drag two bullets along the range line.
* The min value and max value cannot be crossed within the range.
* A mocked service is available to fetch the min and max values to be used in the component.

## Features

- Two different range scrolls with draggable sliders.
- Ability to set minimum and maximum values for each range scroll. 
- Event handling for range change.
- Styling with SCSS.
- Bundled with Webpack and transpiled with Babel for compatibility.
- Unit tests using Jest.

## Usage

1. Install the dependencies using npm:

   ```
   npm install
   ```

Once the installation is complete, you can start using this application.

2. Start your React.js application using the following command:

   ```
   npm start
   ```

3. Access your application on `localhost:8080/` in your web browser.

## Testing

This Scroll Mango Project includes unit tests using Jest. To run the tests, use the following command:

```
npm test
```

The test results will be displayed in the console.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- SCSS: A CSS preprocessor that extends the capabilities of CSS.
- Webpack: A module bundler that helps bundle the project's assets.
- Babel: A JavaScript compiler that converts modern JavaScript code into browser-compatible code.
- Jest: A JavaScript testing framework for unit testing.
