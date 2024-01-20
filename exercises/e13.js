import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
  const totalTemperature = data.planets.reduce((sum, planet) => sum + (planet.avgTemp || 0), 0);
  const averageTemperature = totalTemperature / data.planets.length;
  return averageTemperature;
  }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
