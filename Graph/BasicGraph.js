const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

//Motive:
/**
 *  Represent the airport data in form of a graph.
 */

//Graph
const graph = new Map();

//Add Node
function addNode(airport) {
  graph.set(airport, []);
}

// Add undirected edge
function addEdge(origin, destination) {
  graph.get(origin).push(destination);
  graph.get(destination).push(origin);
}

//Create Graph.

function createGraph(airports, routes) {
  airports.forEach((airport) => {
    addNode(airport);
  });

  routes.forEach((route) => {
    addEdge(...route);
  });
}

// Create Graph
createGraph(airports, routes);
console.log(graph);

// FIND THE ROUTES TO "BKK"  USING BFS
function bfs(start) {
  const visited = new Set();
  const queue = [start]; // initalize to the starting airport
  let routes = 0;
  while (queue.length > 0) {
    let airport = queue.shift(); //FIFO
    let destinations = graph.get(airport);
    for (let destination of destinations) {
      if (destination === "BKK") {
        routes++;
        console.log(`Route: ${routes} : ${airport}--->${destination}`);
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}
bfs("PHX");

// FIND THE ROUTES TO "BKK" USING DFS
let route = 0;
function dfs(airport, visited = new Set()) {
  visited.add(airport);
  let destinations = graph.get(airport);

  for (let destination of destinations) {
    if (destination === "BKK") {
      route++;
      console.log(`Route: ${route} : ${airport}--->${destination}`);
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs("PHX");
