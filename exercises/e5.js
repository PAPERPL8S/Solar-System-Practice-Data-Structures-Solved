import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  // Your code goes here...
  return planets.filter(planet => planet.massValue >= number).map(planet => planet.name);
}
  const planets = [
    { name: 'Mercure', massValue: 3.30114 },
    { name: 'Uranus', massValue: 8.68127 },
    { name: 'Mars', massValue: 6.41712 },
    { name: 'Jupiter', massValue: 1.89819 },
    { name: 'Saturne', massValue: 5.68336 },
    { name: 'Earth', massValue: 5.97237 },
    { name: 'Vénus', massValue: 4.86747 },
    { name: 'Neptune', massValue: 1.02413 }
  ];

  const result = getPlanetsWithMassValue(planets, 4);



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
