# Advice Generator

An Advice Generator web app that provides inspirational quotes and advice to users. This project was created by Adewunmi Oladele as a front-end challenge for Code Monster 1.0.

## Project Structure

The project consists of the following files and directories:

- `index.html`: The HTML file for the app's user interface.
- `style.css`: The CSS file for styling the app.
- `script.js`: The JavaScript file responsible for fetching and displaying advice.
- `Group.svg`: An SVG icon used in the app.
- `Group 3.svg`: Another SVG icon used for the "Generate" button.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Web Browser**: You'll need a modern web browser to run the app.
- **Internet Connection**: The app requires an internet connection to fetch advice from the API.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Rachamv/Advice-generator.git
   ```

2. Open the project folder in your preferred code editor.

3. Open `index.html` in your web browser to run the app.

## Code Documentation

### HTML Structure

The project's HTML structure is defined in the `index.html` file. Here's an overview of the key elements:

- `<div class="container">`: This is the main container for the app's content.
- `<div class="advice-id">`: Displays the advice ID.
- `<q class="advice-text">`: Displays the advice text.
- `<div class="Group2">`: Contains an icon.
- `<img class="Group">`: An icon within the `.Group2` div.
- `<div class="Group3">`: The "Generate" button to fetch new advice.

### CSS Styling

The styling of the app is defined in the `style.css` file. Custom CSS variables are used for colors. Key CSS classes include:

- `.container`: Styles the main content container.
- `.advice-id`: Styles the advice ID text.
- `.advice-text`: Styles the advice text.
- `.Group2`: Styles the container for the icon.
- `.Group`: Styles the icon within `.Group2`.
- `.Group3`: Styles the "Generate" button.

### JavaScript Functionality

The core functionality of the app is implemented in the `script.js` file. Here's an overview:

- `getAdvice` (Async Function):
  - Fetches advice from the [Advice Slip API](https://api.adviceslip.com/advice).
  - Updates the advice text and advice ID displayed on the page.

- Event Listeners:
  - `generateButton` (`.Group3`) has a click event listener to trigger `getAdvice` when clicked.
  
- Initialization:
  - `getAdvice` is called initially to load advice when the page loads.

### External Dependencies

This project uses the [Advice Slip API](https://api.adviceslip.com/advice) to fetch advice quotes.

## Usage

Once the app is running, click the "Generate" button to get a piece of advice.

- Click the "Generate" button.
- A new piece of advice will be displayed on the screen.

## Usage Examples

- **Fetching Advice**: Click the "Generate" button to fetch a new piece of advice.

![Generate Button](Group3.svg)

- **Styling**: You can customize the app's styling by editing the CSS variables in `style.css`.

```css
/* Example CSS variable customization */
:root {
  --Dark-Blue: #202733;
  /* ... other variables ... */
}
```

## Contributing

We welcome contributions to improve this project! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Open a pull request with a detailed description of your changes.

## Acknowledgments

- This project utilizes the [Advice Slip API](https://api.adviceslip.com/advice) for fetching advice quotes.
- Special thanks to Adewunmi Oladele for creating this project as a front-end challenge for Code Monster 1.0.

## License

This project is licensed under the [MIT License](LICENSE).
```
