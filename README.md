# Rock-Paper-Scissors
So, I was doing a basic JavaScript course and one of the examples was to do a rock-paper-scissors game. I get a little obssesed with the idea and even after I finished it I have been working on it and using it for other courses.

It started with the logic using the js console, then I impemented a simple **UI** with vanilla **CSS**, then I refactor the code to make it more **reusable** and **scalable**. Currently I'm using it for practice with **webpack** and **deploying** technologies.

## Project Setup Documentation

This documentation provides instructions on setting up the "rock-paper-scissors" project. Please follow the steps below:

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js (version 12 or higher)

### Installation

1. Clone the project repository from GitHub:

   ```bash
   git clone https://github.com/JehuFrayle/rock-paper-scissors.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rock-paper-scissors
   ```

3. Install the project dependencies using npm:
   ```bash
   npm install
   ```
### Development Server
To run the project in development mode with live reloading, use the following command:

```bash
npm run start
```
This will start the webpack dev server on port 2806. Open your web browser and visit http://localhost:2806 to view the application.

### Building for Production
To build the project for production, use the following command:

```bash
npm run build
```
This will generate optimized and minified files in the dist directory.
## Neon Design Redesign

The project redesign is based on a vibrant neon color palette that adds a striking and modern look to the application. The colors used are as follows:

- ![#02C9AF](https://via.placeholder.com/15/02C9AF/000000?text=+) `#02C9AF`
- ![#049CE4](https://via.placeholder.com/15/049CE4/000000?text=+) `#049CE4`
- ![#FE00EC](https://via.placeholder.com/15/FE00EC/000000?text=+) `#FE00EC`
- ![#2B4F8D](https://via.placeholder.com/15/2B4F8D/000000?text=+) `#2B4F8D`
- ![#011034](https://via.placeholder.com/15/011034/000000?text=+) `#011034`

These colors are used to highlight key elements in the interface and provide a vibrant and eye-catching appearance.

The design has been created with a neon focus, using drop shadow filters to highlight elements and add depth. The shadow effects are applied using the CSS `filter` property and the `drop-shadow()` function. These effects are used to create a sense of lighting and three-dimensional enhancement in the design elements.

Some tips for implementing the redesign with neon colors and drop shadow effects:

- Use the colors from the palette on key interface elements such as buttons, highlighted links, navigation bars, etc.
- Experiment with different combinations of neon colors to achieve suitable visual contrast and balance.
- Apply the drop shadow effects using the `filter` property and the `drop-shadow()` function to highlight elements and add depth.
- Ensure readability and usability are maintained by carefully selecting colors and applying shadow effects.

## Using `modal.js`

The `modal.js` file is a JavaScript module that provides functionality for displaying and hiding a modal in a web application. It allows you to add custom messages and an optional image to the modal.

### Importing the module

To use `modal.js`, you need to import the module in your JavaScript file:

```javascript
import { modal } from './utils/modal';
```
Make sure to provide the correct path to the modal.js file based on your project structure.

### Opening the modal
To open the modal and display custom messages, use the open() method of the modal object. You can provide the following optional parameters:

- messages (array): An array of messages to display in the modal. The default value is ['Hello from the modal'].
- time (number): The time in milliseconds after which the modal will automatically close. The default value is 3000 (3 seconds).
- inlineImage (string): The URL of an image to display inside the modal. The default value is null.

```javascript
modal.open({
  messages: ['Message 1', 'Message 2'],
  time: 5000,
  inlineImage: 'https://example.com/image.png',
});
```

The above code will open the modal with the provided messages, display the specified image, and automatically close after 5 seconds.

### Closing the modal
To manually close the modal, use the close() method of the modal object:

```javascript
modal.close();
```