# Weather App

## [Live](https://weather-app-assignments.vercel.app)

## Description

The Weather App is a web application designed to display weather details for different cities. Users can fetch weather details for a predefined list of cities or search for a specific city's weather information.

## Features

-  Fetch weather information for multiple cities using the **Get Weather** button.
-  Editable weather descriptions for each city.
-  Calculate and display the data age dynamically.
-  Highlight search results and provide interactivity using buttons.

## User Interface Layout

1. **City List Table**:
   -  A single-column table on the left displaying the list of cities.
2. **Details Table**:
   -  A six-column table displaying:
      -  City Name
      -  Temperature
      -  Humidity
      -  Description (editable)
      -  Data Age (calculated as `(Current date time - data_and_time)` in hours)
      -  Delete button to remove rows.
3. **UI Elements**:
   -  "Get Weather" and "Search" are clickable buttons.
   -  Highlight active rows with a green border during data fetching.
   -  Display "No Data" when tables are empty.

### Styling

-  Header and button background color: `#4472C4`
-  Header and button text color: `#ffffff`
-  Row content and "No Data" text color: `#000000`
-  Row borders: `#000000`

## API Integration

-  Fetch weather data using the following API:
-  GET https://python3-dot-parul-arena-2.appspot.com/test?cityname=<city_name>
-  Replace `<city_name>` with the name of the city for the request.

## Application Flow

1. **Fetching Weather Data**:

-  Click "Get Weather".
-  The first city in the "City List" table is highlighted.
-  The app fetches weather information for the highlighted city.
-  Weather details are displayed in the "Details" table.
-  The next city is highlighted, and the process repeats.

2. **Search Functionality**:

-  Enter a city name in the search input box.
-  Click "Search".
-  If the city is in the "Details" table, its row is highlighted in yellow for 3 seconds.

3. **Row Deletion**:

-  Click the "Delete" button in the "Details" table to remove the corresponding row.

4. **Data Persistence**:

-  Store table data dynamically in a dictionary or JavaScript object.

## Example Final UI

The final UI includes:

-  A list of cities in the left table.
-  Detailed weather information in the right table.

## Additional Notes

-  Each fetched city's weather data adds a new row to the "Details" table.
-  Rows are dynamically managed to reflect user interactions and API responses.

## How to Run

1. Open the application in a web browser.
2. Interact with the "City List" and "Details" tables using the "Get Weather" and "Search" buttons.

## Setup Project

1. clone repository

```bash
git clone https://github.com/psapkale/weather-app-assignment.git
```

2. open folder

```bash
cd weather-app-assignment
```

3. install dependencies

```bash
npm i
```
