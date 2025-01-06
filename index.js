const jsonServer = require("json-server"); // Import json-server library
const server = jsonServer.create();         // Create an instance of json-server
const router = jsonServer.router("db.json"); // Use db.json as the mock database
const middlewares = jsonServer.defaults();   // Use default middlewares (logging, static, CORS)
const port = process.env.PORT || 3001; // Use dynamic port for deployment or fallback to 3001 locally

// Middleware to handle requests
server.use(middlewares);

// Optionally add custom middlewares (for logging, etc.)
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);  // Log each request for debugging
  next(); // Pass control to the next middleware
});

// Use the router (the actual API routes are defined here)
server.use(router);

// Start the server
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
}).on('error', (err) => {
  console.error(`Failed to start server: ${err.message}`);
});
