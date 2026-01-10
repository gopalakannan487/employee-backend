const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors)
server.use(middlewares);

// Parse JSON body
server.use(jsonServer.bodyParser);

// Custom routes (optional)
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

// Use router
server.use(router);

// IMPORTANT: Use Render/Railway PORT
const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
