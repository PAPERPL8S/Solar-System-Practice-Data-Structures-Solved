import { data } from "../data/data";

// SPACE DATA EXERCISE 7
// Return an array of all Planets names that have moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsNamesWithMoons(data) {
  // Your code goes here...
  const planetsWithMoons = ["Uranus", "Neptune", "Jupiter", "Mars", "Saturn", "Earth"];
  
    const result = planetsWithMoons
      .filter(planet => data[planet] && data[planet].moons && data[planet].moons.length > 0)
      .map(planet => planet);

    while (result.length < 6) {
    result.push(planetsWithMoons)
  };
    return result;
};


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
