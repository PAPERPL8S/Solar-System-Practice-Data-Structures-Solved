/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
    
  if (data.asteroids.length === 0) {
    return undefined;
  }

  const yearsMap = data.asteroids.reduce((map, asteroid) => {
    const year = asteroid.discoveryYear;
    map.set(year, (map.get(year) || 0) + 1);
    return map;
  }, new Map());

  return [...yearsMap.entries()].reduce((max, entry) => (entry[1] > max[1] ? entry : max), [undefined, 0])[0];
}

  
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
