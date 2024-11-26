# Earthquake Visualization with Leaflet.js

## Overview

This project is part of a module on **Advanced Interactive Visualizations Using JavaScript**, which focuses on creating data-driven, interactive maps. The primary goal of this assignment was to leverage the Leaflet.js library to visualize earthquake data provided by the United States Geological Survey (USGS). By creating an interactive map, the project demonstrates the power of geospatial data visualization to communicate insights about natural phenomena.

## Learning Objectives

The assignment covered the following key concepts and skills:
- **Interactive Maps**: Creating dynamic maps using Leaflet.js.
- **GeoJSON Data**: Working with GeoJSON, a specialized JSON format for geospatial data.
- **Data Visualization**: Scaling and styling map markers to represent earthquake magnitude and depth.
- **Interactivity**: Adding tooltips and popups to display relevant earthquake information (e.g., location, magnitude, and depth).
- **Customization**: Enhancing the map with custom legends, marker styling, and layered controls.

## Features of the Visualization

1. **Dynamic Map**:
   - Utilized Leaflet's TileLayer to provide a base map.
   - Integrated GeoJSON data from the USGS API to plot earthquake locations.

2. **Earthquake Data Visualization**:
   - Earthquake magnitudes represented by the size of circular markers.
   - Depth of earthquakes visualized with a gradient color scheme:
     - Deeper earthquakes are displayed with darker colors.
     - Shallower earthquakes are displayed with lighter colors.

3. **Interactive Tooltips**:
   - Each marker includes a popup showing:
     - Magnitude of the earthquake.
     - Location (name or coordinates).
     - Depth of the earthquake.

4. **Legend**:
   - Added a legend to the map to explain the color scheme for earthquake depth.

## Technologies Used

- **Leaflet.js**: A JavaScript library for interactive maps.
- **D3.js**: For fetching GeoJSON data from the USGS API.
- **HTML & CSS**: For structuring and styling the web page.
- **GeoJSON**: For representing earthquake data in a standardized geospatial format.

## How It Works

1. **Fetching Data**:
   The visualization uses the USGS GeoJSON Feed for earthquakes over the past week:
   [All Week Earthquakes GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson).

2. **Processing and Displaying Data**:
   - Earthquake data is fetched with D3.js and plotted onto the map as circular markers.
   - Marker sizes scale with earthquake magnitude, while colors change based on depth.

3. **Legend and Interaction**:
   - A legend explains the color scheme for depth.
   - Tooltips provide real-time information when users interact with markers.

## Assignment Purpose

This project was designed to demonstrate:
- The ability to create interactive and visually engaging geospatial visualizations.
- The use of external data sources (APIs) for real-time data visualization.
- Skills in JavaScript programming and working with libraries such as Leaflet.js and D3.js.

## Outcome

This project is a stepping stone in building advanced data visualization skills. It highlights the power of combining JavaScript libraries, geospatial data, and interactivity to communicate insights effectively. The map is not only functional but also intuitive and visually appealing.

---
