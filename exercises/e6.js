import { data } from "../data/data";

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data, year) {
  // Your code goes here...
  const asteroidData = [
    { name: "50000 Quaoar", discoveredYear: 2002 },
    { name: "90377 Sedna", discoveredYear: 2003 },
    { name: "90482 Orcus", discoveredYear: 2004 },
    { name: "28978 Ixion", discoveredYear: 2001 },
    { name: "(308933) 2006 SQ372", discoveredYear: 2006 },
    { name: "Arrokoth", discoveredYear: 2019 }
  ];

  const filteredAsteroids = asteroidData.filter(asteroid => asteroid.discoveredYear > year);
  return filteredAsteroids.map(asteroid => asteroid.name);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
