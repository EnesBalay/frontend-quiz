const cases = [
  "5/4 0/2",
  "36/1 4 7 8 9 10 13 14 16 17 18 20 21 22 23 25 26 27 28 29 30 32 34 35/1",
  "27/1 4 5 7 8 9 10 13 15 16 17 19 20 21 23 24 25 26/1",
  "75/1 2 4 6 9 10 11 12 14 15 16 17 23 28 29 30 32 33 34 35 36 37 38 39 41 42 43 45 46 47 48 49 50 51 53 54 55 56 57 58 59 60 62 63 64 65 68 70 71 73/3",
  "35/0 1 2 3 4 5 7 8 9 14 15 16 17 19 21 22 25 27 28 29 31 33 34/2",
  "15/0 1 2 3 6 7 8 9 10 14/2",
  "26/0 1 3 5 7 8 9 12 10 13 16 21 19 22 23 24 25/1",
  "9/0 2 4 5 7 8/1",
  "2/0/1",
  "9/0 1 2 3 6 7/1",
  "61/2 3 4 5 7 8 9 12 13 14 16 17 18 19 20 22 23 24 25 27 28 29 30 32 34 37 38 39 40 41 43 44 48 51 52 53 54 57 58 59/2",
  "3/1 2 3/0",
  "36/0 1 3 4 6 8 9 11 12 13 15 16 17 19 20 21 22 23 24 26 27 29 31 33/2",
  "23/0 1 2 3 4 7 13 14 15 16 17 18 19 20 22/3",
  "20/4 7 8 9 10 11 13 14 12 15 16 17 19/4",
  "24/0 2 3 4 6 8 10 15 16 17 18 20 21 22 23 19/2",
  "16/9 13 1 3 7/2",
  "47/12 43 45 2 1 16 34 33 0 7 17 36 39 13 5 35 31 41 9 24 44 40 4 8 28 19 21 29 27 6 3 46 32 30 11 42 14 25 22 38 37 15/1",
  "26/22 21 4 12 18 20 17 23 8/4",
  "159/7 117 95 138 87 132 53 155 107 36 114 89 64 81 32 110 140 124 111 121 42 33 125 104 100 146 54 14 154 52 136 142 112 44 13 66 153 101 25 51 3 11 141 9 84 150 55 31 58/7",
  "141/77 17 107 76 105 125 123 120 83 49 86 52 124 84 121 136 67 21 66 73 114 51 10 112 139 5 113 126/14",
  "41/18 12 34 7 3 15 32 39 10 38 27 5 6 26 25 29 4 37 13 23 20 11 8 0 14 33 24/1",
];

function getInaccessibleFactory(n, factories) {
  if (n === factories.length) {
    return 0;
  }
  let factoryLocations = Array(n).fill(false);
  for (let factory of factories) {
    factoryLocations[factory] = true;
  }
  let maxDistance = 0;
  for (let i = 0; i < n; i++) {
    let distanceToNearestFactory = n;
    for (let j = 0; j < n; j++) {
      if (factoryLocations[j] === true) {
        let distance = Math.abs(j - i);
        distanceToNearestFactory = Math.min(distanceToNearestFactory, distance);
      }
    }
    maxDistance = Math.max(maxDistance, distanceToNearestFactory);
  }
  return maxDistance;
}

function main() {
  for (let i = 0; i < cases.length; i++) {
    const [n, c, a] = cases[i].split("/");
    const inaccessible = getInaccessibleFactory(
      parseInt(n),
      c.split(" ").map((x) => parseInt(x))
    );
    console.log(
      `Case ${i + 1} [${inaccessible || "0"} == ${a}]: ${
        inaccessible == a ? "OK" : "FAIL"
      }`
    );
  }
}
main();
