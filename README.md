# Weather App

This is a simple weather application that allows users to search for the current weather in any city using the OpenWeatherMap API.

## Features

- Search for current weather by city name
- Display temperature, weather description, humidity, and weather icon
- Responsive design

## Getting Started

### Prerequisites

- A web browser
- An API key from OpenWeatherMap

### Installation

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/enkiga/Weather-App
    ```

2. Navigate to the project directory:

    ```sh
    cd Weather-App
    ```

3. Open the `index.html` file in your web browser.

### Usage

1. Obtain an API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
2. Open the `script.js` file and replace the empty string in the `API_KEY` constant with your API key:

    ```js
    const API_KEY = "your_api_key_here";
    ```

3. Enter a city name in the input field and click the "Search" button to get the current weather information.

## Files

- `index.html`: The main HTML file that contains the structure of the web page.
- `styles.css`: The CSS file that contains the styles for the web page.
- `script.js`: The JavaScript file that contains the logic for fetching and displaying weather data.

## License

This project is licensed under the MIT License.
