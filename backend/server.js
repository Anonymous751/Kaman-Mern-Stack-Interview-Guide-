// Import dependencies
import express from "express";       // Express: web framework for Node.js
import cookieParser from "cookie-parser"; // To parse cookies from HTTP requests
import cors from "cors";             // To enable Cross-Origin Resource Sharing
import dotenv from "dotenv"
dotenv.config();
import userRoutes from "./app/todoListApp/routes/usersRoutes.js"
import connectDB from "./config/database.js";
import Froutes from "./app/myStaticData/pages/frontendStaticData/routes/Froutes.js"
import webRoutes from "./app/myStaticData/pages/webStaticData/routes/webTopicRoutes.js"
import backendRoutes from "./app/myStaticData/pages/backendStaticData/routes/backendTopicRoutes.js"
import blogRoutes from "./app/blogPostApp/routes/blogRoutes.js"


// Database Connection
connectDB();

// Create an Express application
const app = express();

// Set the server port
// Use environment variable PORT if available, otherwise default to 5000
const PORT = process.env.PORT || 5000 ;

// ------------------ MIDDLEWARE ------------------

// Enable CORS so that this server can be accessed from other origins (like React frontend)
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Middleware to parse incoming JSON requests
// This allows us to access `req.body` as a JavaScript object
app.use(express.json());

// Middleware to parse cookies from incoming requests
// Cookies can be used for session management, authentication, etc.
app.use(cookieParser());

// ------------------ ROUTES ------------------

// Define a simple GET route at "/"
// When user visits http://localhost:5000/ they will see "Hello World"
app.use("/todo-list/api/users", userRoutes)

app.use("/frontend/api", Froutes)

app.use("/backend/api", backendRoutes)

app.use("/web/api", webRoutes)

app.use("/api/blogs", blogRoutes);

// ------------------ START SERVER ------------------

// Start the server and listen on the specified PORT
// The callback logs a message to the console when the server is running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
