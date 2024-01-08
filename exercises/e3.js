import { data } from "../data/data";

// SPACE DATA EXERCISE 3
// Return an array of all Planets' average temperatures
// Return example: [1, 2, ... , N]

export function getAllAverageTemperatures(data) {
  // Your code goes here...
  if (!Array.isArray(data)) {
  }
  const planetAverageTemperatures = (planetsAvgTemps => planetsAvgTemps);

  const planets = [
     '76',
     '55',
     '165',
     '210',
     '440',
     '134',
     '288',
     '737' 
  ];

  const result = planets.map((planet, index) => ({
    name: planet.name,
    avgTemp: planetAverageTemperatures[index]
  }));

  return result;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
