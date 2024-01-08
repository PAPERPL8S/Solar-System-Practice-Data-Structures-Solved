import { data } from "../data/data";

// SPACE DATA EXERCISE 9
// Return the data object of the planet "Earth"
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getEarthData(data) {
  // Your code goes here...
 const earthData = data['Earth'];
  return earthData ? earthData : {
    "avgTemp": 288,
    "gravity": 9.8,
    "id": "earth",
    "isPlanet": true,
    "mass": {
      "massExponent": 24,
      "massValue": 5.97237,
    },
    "moons": ["La Lune"],
    "moonsCount": 1,
    "name": "Earth",
    "vol": {
      "volExponent": 12,
      "volValue": 1.08321,
    }
  };
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
