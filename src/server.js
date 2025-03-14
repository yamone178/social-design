const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const server = express();
const router = jsonServer.router('db.json'); // Your JSON file
const middlewares = jsonServer.defaults();

// Use default middlewares (e.g., logger, static, etc.)
server.use(middlewares);

// Serve static images from the 'public/images' directory
server.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Use JSON Server's router
server.use('/posts', router); // Optional, you can use a different endpoint for API

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});