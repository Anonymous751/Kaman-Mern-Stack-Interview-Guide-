export const backendTopics = [
  {
    id: 1,
    name: "Node.js Basics",
    path: "/backend/nodeBasics",
    explanation:
      "Event loop, non-blocking I/O, single-threaded architecture, modules, npm, require vs import.",
    priority: "Compulsory"
  },
  {
    id: 2,
    name: "Node.js Core Modules",
    path: "/backend/nodeCore",
    explanation:
      "fs, path, http, os, events — usage, examples, and common interview questions.",
    priority: "High"
  },
  {
    id: 3,
    name: "Node.js Streams & Buffers",
    path: "/backend/nodeStreams",
    explanation:
      "Readable, writable, duplex streams, buffers, piping, handling large files efficiently.",
    priority: "High"
  },
  {
    id: 4,
    name: "Node.js Events & EventEmitter",
    path: "/backend/nodeEvents",
    explanation:
      "EventEmitter basics, emitting/listening to events, practical use cases.",
    priority: "Medium"
  },
  {
    id: 5,
    name: "Asynchronous Patterns",
    path: "/backend/asyncPatterns",
    explanation:
      "Callbacks, promises, async/await, error handling, avoiding callback hell.",
    priority: "Compulsory"
  },
  {
    id: 6,
    name: "Node.js Process & Cluster",
    path: "/backend/nodeProcess",
    explanation:
      "process object, environment variables, cluster module for multi-core scaling.",
    priority: "Low"
  },
  {
    id: 7,
    name: "Express Basics",
    path: "/backend/expressBasics",
    explanation:
      "What is Express? Middleware? Routing? Difference between app.use vs app.get. req, res objects.",
    priority: "Compulsory"
  },
  {
    id: 8,
    name: "Backend Folder Structure (MVC)",
    path: "/backend/folderStructure",
    explanation:
      "Why separate controllers, services, and routes? Explain MVC architecture and benefits.",
    priority: "Compulsory"
  },
  {
    id: 9,
    name: "Middleware (Custom & Built-in)",
    path: "/backend/middleware",
    explanation:
      "Application, router, error middleware. How next() works. Common interview scenarios.",
    priority: "Compulsory"
  },
  {
    id: 10,
    name: "Database Basics (SQL & NoSQL)",
    path: "/backend/databaseBasics",
    explanation:
      "RDBMS vs NoSQL, ACID vs BASE, normalization, denormalization, indexes, queries, joins, aggregations.",
    priority: "Compulsory"
  },
  {
    id: 11,
    name: "MongoDB & Mongoose",
    path: "/backend/mongoDB",
    explanation:
      "Schemas, models, validation, timestamps, populate(), references, aggregation pipeline, indexes.",
    priority: "Compulsory"
  },
  {
    id: 12,
    name: "Mongoose Query Methods",
    path: "/backend/queryMethods",
    explanation:
      "find, findOne, findById, updateOne, deleteOne, aggregate, lean(), exec().",
    priority: "High"
  },
  {
    id: 13,
    name: "SQL Queries & Optimization",
    path: "/backend/sqlQueries",
    explanation:
      "Select, joins, group by, subqueries, indexes, query optimization, transactions.",
    priority: "High"
  },
  {
    id: 14,
    name: "Caching & Performance",
    path: "/backend/caching",
    explanation:
      "Why caching? Redis basics, in-memory vs persistent caching, cache invalidation, reducing DB load.",
    priority: "High"
  },
  {
    id: 15,
    name: "Authentication & Authorization",
    path: "/backend/authAuthz",
    explanation:
      "JWT, access vs refresh tokens, session-based auth, RBAC, permissions, secure storage.",
    priority: "Compulsory"
  },
  {
    id: 16,
    name: "File Upload & Storage",
    path: "/backend/fileUpload",
    explanation:
      "Multer, single vs multiple uploads, storage engines, cloud upload (Cloudinary), GridFS.",
    priority: "Medium"
  },
  {
    id: 17,
    name: "Error Handling",
    path: "/backend/errorHandling",
    explanation:
      "Global error handler, try/catch with async/await, error middleware, HTTP status codes.",
    priority: "Compulsory"
  },
  {
    id: 18,
    name: "Security (Web Security)",
    path: "/backend/security",
    explanation:
      "CORS, XSS, CSRF, input sanitization, rate limiting, password hashing, HTTPS basics.",
    priority: "Compulsory"
  },
  {
    id: 19,
    name: "API Design Best Practices",
    path: "/backend/apiDesign",
    explanation:
      "REST naming conventions, versioning, DTOs, status codes, pagination, filtering, query optimization.",
    priority: "Compulsory"
  },
  {
    id: 20,
    name: "Background Jobs & Queues",
    path: "/backend/jobsQueues",
    explanation:
      "Why use background jobs? Bull, RabbitMQ, queues for emails, notifications, long-running tasks.",
    priority: "Medium"
  },
  {
    id: 21,
    name: "Testing Backend APIs",
    path: "/backend/testing",
    explanation:
      "Unit vs integration tests, Jest/Supertest, mocking DB, testing authentication and error scenarios.",
    priority: "High"
  },
  {
    id: 22,
    name: "Deployment & Environment",
    path: "/backend/deployment",
    explanation:
      "Environment variables, process.env, deployment basics (Heroku, Vercel, AWS), logging, monitoring.",
    priority: "High"
  },
  {
    id: 23,
    name: "WebSockets & Real-time Communication",
    path: "/backend/websockets",
    explanation:
      "Socket.io basics, events, broadcasting, rooms, scaling real-time apps.",
    priority: "Medium"
  },
  {
    id: 24,
    name: "Performance & Scalability",
    path: "/backend/performance",
    explanation:
      "Clustering, load balancing, horizontal vs vertical scaling, database replication and sharding.",
    priority: "High"
  },
  {
    id: 25,
    name: "Logging & Monitoring",
    path: "/backend/logging",
    explanation:
      "Winston, Morgan, ELK stack basics, monitoring tools, error tracking and alerting.",
    priority: "Medium"
  },
  {
    id: 26,
    name: "Microservices & Architecture",
    path: "/backend/microservices",
    explanation:
      "Difference between monolith vs microservices, REST vs gRPC, API gateway, service discovery, inter-service communication.",
    priority: "Low"
  }
];
