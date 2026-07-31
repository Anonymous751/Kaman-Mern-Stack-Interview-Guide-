// SearchFilterBackend.jsx

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import TutorialNavigation from "../../components/TutorialNavigation";
import { useNavigate } from "react-router-dom";
import TutorialRoadmap from "../../components/TutorialRoadmap";



const searchFilterPages = [

{
    color:"text-primary mb-0",
    badge:"bg-primary",

    items:[

        "📁 Project Folder Structure",
        "📦 Install Required Packages",
        "🚀 Create Express Server",
        "🗄 Connect MongoDB",
        "👤 Create User Model",
        "🛣 Create User Route"

    ]

},



{
    color:"text-success mb-0",
    badge:"bg-success",

    items:[

        "🎯 Create User Controller",
        "🔍 Read Query Parameters",
        "⚡ Build Dynamic Query",
        "🔎 Search using $regex",
        "🏙 Apply City Filter",
        "🏢 Apply Company Filter"

    ]

},



{
    color:"text-warning mb-0",
    badge:"bg-warning text-dark",

    items:[

        "📊 Execute MongoDB Query",
        "📤 Return JSON Response",
        "🌐 Test API in Browser",
        "📮 Test API in Postman",
        "⚛ Connect React Frontend",
        "⚠ Common Mistakes"

    ]

},



{
    color:"text-danger mb-0",
    badge:"bg-danger",

    items:[

        "✅ Best Practices",
        "💼 Interview Questions",
        "🔄 Complete Backend Flow"

    ]

}

];



const SearchFilterBackend = () => {


   const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

const stepsPerPage = 6;

const totalSteps = 20;

const totalPages = Math.ceil(totalSteps / stepsPerPage);

const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/quick-access"); // your fallback page
    }
  };


  return (
    <Container className="my-5">

      <h2 className="mb-4">
        Search & Filter Backend Tutorial
      </h2>

    <Button
          onClick={handleBack}
        >
          ← Go Back
        </Button>


      {currentPage === 1 && (
  <>


<TutorialRoadmap


title="🚀 Search & Filter Backend Roadmap"


description="
Complete this tutorial page by page to build a fully functional
Search & Filter Backend using Express, MongoDB, Mongoose and React.
"


pages={searchFilterPages}


/>




      {/* Step 1 */}

      <Card className="mb-4">
        <Card.Body>

          <h4>Step 1 — Project Structure</h4>

          <p>
            Create a clean folder structure before writing backend code.
          </p>

          <SyntaxHighlighter language="text" style={oneDark}>
{`backend/
│
├── config
├── controllers
├── models
├── routes
├── server.js`}
          </SyntaxHighlighter>

          <p>
            <strong>Explanation</strong>

            <br />

            Organizing folders keeps the project clean and makes files easy
            to find.
          </p>

        </Card.Body>
      </Card>

      {/* Step 2 */}

      <Card className="mb-4">
        <Card.Body>

          <h4>Step 2 — Install Packages</h4>

          <p>
            Install Express, MongoDB and other required packages.
          </p>

          <SyntaxHighlighter language="bash" style={oneDark}>
{`npm init -y

npm install express mongoose cors dotenv`}
          </SyntaxHighlighter>

          <p>

            <strong>Explanation</strong>

            <br />

            Express creates APIs.

            Mongoose connects MongoDB.

            CORS allows React to access APIs.

          </p>

        </Card.Body>
      </Card>

   {/* Step 3 */}

<Card className="mb-4">
  <Card.Body>

    <h4>Step 3 — Create Express Server</h4>

    <p>
      Now we will create the main Express server. This is the entry point of
      the backend application. Every request coming from the React frontend
      first reaches this server. The server then processes the request and
      sends the appropriate response back.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`// server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`}
    </SyntaxHighlighter>

    <h5 className="mt-4">How This Code Works</h5>

    <p>

      <strong>1. Import Express</strong>

      <br />

      Express is a Node.js framework used to build REST APIs quickly and easily.

      <br /><br />

      <strong>2. Import CORS</strong>

      <br />

      CORS (Cross-Origin Resource Sharing) allows the React frontend
      running on one port (for example, <code>localhost:5173</code>)
      to communicate with the backend running on another port
      (for example, <code>localhost:5000</code>).

      <br /><br />

      <strong>3. Import Dotenv</strong>

      <br />

      Dotenv loads environment variables from the
      <code>.env</code> file into your application.

      <br /><br />

      <strong>4. dotenv.config()</strong>

      <br />

      This line reads the <code>.env</code> file so values like
      <code>PORT</code> and <code>MONGO_URI</code> can be accessed
      using <code>process.env</code>.

      <br /><br />

      <strong>5. Create Express Application</strong>

      <br />

      <code>const app = express();</code>

      <br />

      This creates the Express application. Every route, middleware,
      and API endpoint is attached to this app.

      <br /><br />

      <strong>6. app.use(cors())</strong>

      <br />

      Enables communication between the React frontend and Express backend.

      <br /><br />

      <strong>7. app.use(express.json())</strong>

      <br />

      Converts incoming JSON request bodies into JavaScript objects.

      <br />

      Example:

    </p>

    <SyntaxHighlighter language="json" style={oneDark}>
{`{
  "name": "John",
  "city": "New York"
}`}
    </SyntaxHighlighter>

    <p>

      Without this middleware,
      <code>req.body</code> will be <code>undefined</code> when sending JSON data.

    </p>

    <h5 className="mt-4">Creating Your First Route</h5>

    <p>

      The following route responds when someone visits the root URL.

    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`app.get("/", (req, res) => {
    res.send("Server Running Successfully");
});`}
    </SyntaxHighlighter>

    <p>

      Here,

      <br />

      • <code>app.get()</code> creates a GET API.

      <br />

      • <code>"/"</code> represents the root URL.

      <br />

      • <code>req</code> contains information about the incoming request.

      <br />

      • <code>res</code> is used to send a response back to the client.

    </p>

    <h5 className="mt-4">Starting the Server</h5>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`}
    </SyntaxHighlighter>

    <p>

      <code>app.listen()</code> starts the Express server.

      <br /><br />

      If the <code>PORT</code> environment variable exists, Express uses it.

      Otherwise, it starts on port <code>5000</code>.

    </p>

    <h5 className="mt-4">Project Flow</h5>

    <SyntaxHighlighter language="text" style={oneDark}>
{`React Frontend
       │
       ▼
Axios Request
       │
       ▼
Express Server (server.js)
       │
       ▼
Routes
       │
       ▼
Controller
       │
       ▼
MongoDB
       │
       ▼
JSON Response
       │
       ▼
React UI`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Output</h5>

    <p>

      After running the server,

    </p>

    <SyntaxHighlighter language="bash" style={oneDark}>
{`npm run dev

Server running on port 5000`}
    </SyntaxHighlighter>

    <p>

      Opening the following URL in your browser:

    </p>

    <SyntaxHighlighter language="text" style={oneDark}>
{`http://localhost:5000/`}
    </SyntaxHighlighter>

    <p>

      will display:

    </p>

    <SyntaxHighlighter language="text" style={oneDark}>
{`Server Running Successfully`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Why Do We Need Express Server?</h5>

    <ul>
      <li>Receives requests from the React frontend.</li>
      <li>Handles routing and API endpoints.</li>
      <li>Processes business logic.</li>
      <li>Communicates with MongoDB.</li>
      <li>Returns data back to React.</li>
    </ul>

    <div className="alert alert-info mt-4">

      <strong>Beginner Tip</strong>

      <br />

      Think of the Express server as a receptionist in an office.

      React sends every request to the receptionist (Express).

      Express checks what the user wants, asks MongoDB for the required data,
      and then returns the response back to React.

    </div>

  </Card.Body>
</Card>

     {/* Step 4 */}

<Card className="mb-4">
  <Card.Body>

    <h4>Step 4 — Connect MongoDB</h4>

    <p>
      Connect your Express server with MongoDB using Mongoose.
      Without this connection, your application cannot store or
      retrieve data.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`// config/db.js

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;`}
    </SyntaxHighlighter>

    <p>
      <strong>Explanation</strong>

      <br /><br />

      • <code>mongoose.connect()</code> connects your backend to MongoDB.<br />
      • <code>process.env.MONGO_URI</code> reads the database URL from the <code>.env</code> file.<br />
      • If the connection succeeds, the backend can access collections.<br />
      • If the connection fails, the server stops because the database is required.
    </p>

  </Card.Body>
</Card>
{/* Step 5 */}

<Card className="mb-4">
  <Card.Body>

    <h4>Step 5 — Create User Model</h4>

    <p>
      In MongoDB, data is stored inside <strong>Collections</strong>.
      Before we can save or fetch users, we must create a
      <strong> Mongoose Model</strong>.
      The model defines the structure (Schema) of every user document.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`// models/User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    username: {
        type: String,
        required: true,
    },

    city: {
        type: String,
    },

    company: {
        type: String,
    },
},
{
    timestamps: true,
}
);

export default mongoose.model("User", userSchema);`}
    </SyntaxHighlighter>

    <h5 className="mt-4">What is a Schema?</h5>

    <p>
      A Schema is a blueprint of your MongoDB documents.
      It tells MongoDB which fields every user should have,
      what type of data they store, and any validation rules.
    </p>

    <SyntaxHighlighter language="text" style={oneDark}>
{`User Collection

{
   "_id": "...",
   "name": "John Doe",
   "email": "john@gmail.com",
   "username": "john123",
   "city": "New York",
   "company": "Google"
}`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Code Explanation</h5>

    <p>

      <strong>1. mongoose.Schema()</strong>

      <br />

      Creates the structure of every User document.

      <br /><br />

      <strong>2. name</strong>

      <br />

      Stores the user's full name.

      <br />

      <code>required: true</code> means this field cannot be empty.

      <br />

      <code>trim: true</code> removes extra spaces.

      <br /><br />

      <strong>3. email</strong>

      <br />

      Stores the user's email address.

      <br />

      <code>unique: true</code> prevents duplicate emails.

      <br />

      <code>lowercase: true</code> automatically converts emails to lowercase.

      <br /><br />

      <strong>4. username</strong>

      <br />

      Stores the username used for login or display.

      <br /><br />

      <strong>5. city</strong>

      <br />

      Used later for filtering users by city.

      <br /><br />

      <strong>6. company</strong>

      <br />

      Used later for filtering users by company.

      <br /><br />

      <strong>7. timestamps</strong>

      <br />

      Automatically creates:

      <br />

      • createdAt

      <br />

      • updatedAt

      <br /><br />

      <strong>8. mongoose.model()</strong>

      <br />

      Creates a model named <code>User</code>.

      This model is used throughout the backend to perform CRUD operations.

    </p>

    <h5 className="mt-4">Why Do We Need a Model?</h5>

    <ul>
      <li>Defines the structure of MongoDB documents.</li>
      <li>Validates incoming data.</li>
      <li>Provides methods like <code>find()</code>, <code>findOne()</code>, <code>create()</code>, <code>updateOne()</code>, and <code>deleteOne()</code>.</li>
      <li>Keeps database code clean and reusable.</li>
    </ul>

    <h5 className="mt-4">Output</h5>

    <p>
      After creating this model, MongoDB automatically creates a
      <strong> users </strong>
      collection when the first document is inserted.
    </p>

    <SyntaxHighlighter language="text" style={oneDark}>
{`Database
   │
   └── users
          │
          ├── John
          ├── Alex
          ├── Emma
          └── Sarah`}
    </SyntaxHighlighter>

    <div className="alert alert-info mt-4">

      <strong>Beginner Tip</strong>

      <br />

      Think of a Mongoose Model as a JavaScript class.

      Every new user you create becomes one document inside the
      MongoDB <strong>users</strong> collection.

    </div>

  </Card.Body>
</Card>

     {/* Step 6 */}

{/* Step 6 */}

<Card className="mb-4">
  <Card.Body>

    <h4>Step 6 — Create User Route</h4>

    <p>
      Now create a route that will receive requests from the React
      frontend. This route will call the controller to search and
      filter users from MongoDB.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`// routes/userRoutes.js

import express from "express";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);

export default router;`}
    </SyntaxHighlighter>

    <h5 className="mt-4">How This Code Works</h5>

    <p>

      <strong>1. Import Express</strong>

      <br />

      Express Router helps us create API endpoints in separate files.
      This keeps the project organized.

      <br /><br />

      <strong>2. Import Controller</strong>

      <br />

      The <code>getUsers()</code> function contains the business logic.
      Instead of writing database code inside the route, we keep it
      inside a controller.

      <br /><br />

      <strong>3. Create Router</strong>

      <br />

      <code>const router = express.Router();</code>

      <br />

      This creates a new router object where we can define multiple
      API endpoints.

      <br /><br />

      <strong>4. Create GET Route</strong>

      <br />

      <code>router.get("/", getUsers);</code>

      <br />

      Whenever someone sends a GET request to this route,
      Express automatically calls the <code>getUsers()</code>
      controller.

      <br /><br />

      <strong>5. Export Router</strong>

      <br />

      Finally, export the router so it can be connected to the
      Express server.

    </p>

    <h5 className="mt-4">Connect Route to Express Server</h5>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`// server.js

import userRoutes from "./routes/userRoutes.js";

app.use("/api/users", userRoutes);`}
    </SyntaxHighlighter>

    <p>

      Now every request sent to

      <br />

      <code>http://localhost:5000/api/users</code>

      <br />

      will be handled by <code>userRoutes.js</code>.

    </p>

    <h5 className="mt-4">Request Flow</h5>

    <SyntaxHighlighter language="text" style={oneDark}>
{`React Frontend
      │
      ▼
GET /api/users
      │
      ▼
userRoutes.js
      │
      ▼
getUsers()
      │
      ▼
MongoDB
      │
      ▼
JSON Response`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Why Do We Need Routes?</h5>

    <ul>
      <li>Creates API endpoints for the frontend.</li>
      <li>Keeps server.js clean and easy to read.</li>
      <li>Separates routing from business logic.</li>
      <li>Makes the project easier to maintain.</li>
      <li>Allows multiple APIs to be organized into different route files.</li>
    </ul>

    <div className="alert alert-info mt-4">

      <strong>Beginner Tip</strong>

      <br />

      Think of a route as the entrance door to your backend.

      When React requests <code>/api/users</code>, Express opens
      this door, executes the controller, fetches data from MongoDB,
      and returns the response back to React.

    </div>

  </Card.Body>
</Card>

<div className="border rounded-4 shadow-sm bg-white p-4 mt-5">

    <div className="d-flex justify-content-between align-items-center flex-wrap">

        <div>

            <h5 className="mb-1">
                📚 Search & Filter Backend Tutorial
            </h5>

            <p className="text-muted mb-0">
                Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </p>

        </div>

       

    </div>
    

</div>



</>
)}


{currentPage === 2 && (
  <>

  <Card className="mb-4">
  <Card.Body>

    <h4>Step 7 — Read Query Parameters</h4>

    <p>
      React sends search and filter values through the URL.
      Express reads these values from <code>req.query</code>.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`// controllers/userController.js

export const getUsers = async (req, res) => {

    const {
        search,
        city,
        company,
    } = req.query;

};`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Explanation</h5>

    <p>

      Every value after the <code>?</code> in the URL is called a
      <strong> Query Parameter</strong>.

      <br /><br />

      Example URL:

    </p>

    <SyntaxHighlighter language="text" style={oneDark}>
{`http://localhost:5000/api/users?search=john&city=London&company=Google`}
    </SyntaxHighlighter>

    <p>

      Express automatically converts them into:

    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`req.query.search
req.query.city
req.query.company`}
    </SyntaxHighlighter>

    <div className="alert alert-info mt-3">
      <strong>Beginner Tip</strong><br />
      Query parameters are mainly used for searching, filtering,
      sorting and pagination.
    </div>

  </Card.Body>
</Card>


<Card className="mb-4">
  <Card.Body>

    <h4>Step 8 — Build Dynamic Query</h4>

    <p>
      Create an empty query object.
      Filters will be added only if the user provides them.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`const query = {};`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Explanation</h5>

    <p>

      We never know which filters the user will send.

      Sometimes:

      <br />

      • Search only

      <br />

      • City only

      <br />

      • Company only

      <br />

      • All filters together

      <br /><br />

      Therefore we create an empty object first and keep adding
      conditions when required.

    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Initially

query = {};`}
    </SyntaxHighlighter>

    <div className="alert alert-success mt-3">
      Dynamic queries make your API flexible and reusable.
    </div>

  </Card.Body>
</Card>

<Card className="mb-4">
  <Card.Body>

    <h4>Step 9 — Search using $regex</h4>

    <p>
      MongoDB uses <code>$regex</code> to perform partial and
      case-insensitive searching.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`if (search) {

    query.name = {
        $regex: search,
        $options: "i",
    };

}`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Explanation</h5>

    <p>

      <code>$regex</code> searches for matching text.

      <br /><br />

      <code>$options: "i"</code> makes the search case-insensitive.

    </p>

    <SyntaxHighlighter language="text" style={oneDark}>
{`Database Name

John Doe
Johnny
Johnson
Alex`}
    </SyntaxHighlighter>

    <p>

      Searching for

      <code>john</code>

      returns

      <br />

      ✔ John Doe

      <br />

      ✔ Johnny

      <br />

      ✔ Johnson

    </p>

    <div className="alert alert-warning mt-3">
      Regular expressions allow users to search without typing the exact text.
    </div>

  </Card.Body>
</Card>


<Card className="mb-4">
  <Card.Body>

    <h4>Step 10 — Apply City Filter</h4>

    <p>
      If a city is selected, add it to the MongoDB query.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`if (city) {

    query.city = city;

}`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Explanation</h5>

    <p>

      Suppose the user selects:

    </p>

    <SyntaxHighlighter language="text" style={oneDark}>
{`City = London`}
    </SyntaxHighlighter>

    <p>

      MongoDB will only return users whose city is
      <strong> London</strong>.

    </p>

    <div className="alert alert-info mt-3">
      If no city is selected, this condition is skipped.
    </div>

  </Card.Body>
</Card>


<Card className="mb-4">
  <Card.Body>

    <h4>Step 11 — Apply Company Filter</h4>

    <p>
      Company filtering works exactly like city filtering.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`if (company) {

    query.company = company;

}`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Explanation</h5>

    <p>

      If the user selects

      <strong> Google</strong>,

      only users belonging to Google will be returned.

      <br /><br />

      This condition is optional and only runs when a company
      value exists.

    </p>

    <div className="alert alert-success mt-3">
      Multiple filters can be combined together in one query object.
    </div>

  </Card.Body>
</Card>

<Card className="mb-4">
  <Card.Body>

    <h4>Step 12 — Execute MongoDB Query</h4>

    <p>
      After building the query object, execute it using
      Mongoose's <code>find()</code> method.
    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`const users = await User.find(query);

res.status(200).json(users);`}
    </SyntaxHighlighter>

    <h5 className="mt-4">Explanation</h5>

    <p>

      The completed query object is sent to MongoDB.

      MongoDB searches the database and returns only matching
      documents.

    </p>

    <SyntaxHighlighter language="javascript" style={oneDark}>
{`query = {

    name: {
        $regex: "john",
        $options: "i",
    },

    city: "London",

    company: "Google",

}`}
    </SyntaxHighlighter>

    <p>

      This query means:

      <br />

      ✔ Name contains "john"

      <br />

      ✔ City is London

      <br />

      ✔ Company is Google

      <br /><br />

      Only users satisfying **all conditions** are returned.

    </p>

    <div className="alert alert-primary mt-3">
      <strong>Complete Flow</strong>

      <br />

      React → Express → Read Query Parameters → Build Query →
      MongoDB → Matching Users → JSON Response → React UI
    </div>

  </Card.Body>
</Card>
  

  </>
)}


{currentPage === 3 && (
<>

<Card className="mb-4">
<Card.Body>

<h4>Step 13 — Return JSON Response</h4>

<p>
After MongoDB finds the matching users, we need to send
the data back to the frontend.
Express sends data using a JSON response.
</p>

<SyntaxHighlighter language="javascript" style={oneDark}>
{`// controllers/userController.js

export const getUsers = async (req, res) => {

    const users = await User.find(query);

    res.status(200).json({
        success: true,
        count: users.length,
        data: users,
    });

};`}
</SyntaxHighlighter>

<h5 className="mt-4">Explanation</h5>

<p>

The <code>res.json()</code> method converts JavaScript
objects into JSON format and sends them to the client.

<br /><br />

The response contains:

<br />

✔ <strong>success</strong> → tells whether the request worked

<br />

✔ <strong>count</strong> → number of matching users

<br />

✔ <strong>data</strong> → actual user records

</p>


<SyntaxHighlighter language="json" style={oneDark}>
{`{
    "success": true,
    "count": 2,
    "data": [
        {
            "name": "John",
            "city": "London"
        },
        {
            "name": "Alex",
            "city": "London"
        }
    ]
}`}
</SyntaxHighlighter>


<div className="alert alert-success mt-3">
<strong>Beginner Tip</strong><br />
Always return a consistent JSON structure from your API.
It makes frontend development easier.
</div>


</Card.Body>
</Card>



<Card className="mb-4">
<Card.Body>

<h4>Step 14 — Test API in Browser</h4>

<p>
Before connecting React, test your backend API directly
using the browser.
</p>


<SyntaxHighlighter language="text" style={oneDark}>
{`http://localhost:5000/api/users`}
</SyntaxHighlighter>


<h5 className="mt-4">Explanation</h5>

<p>

When you open the API URL, Express receives the request
and returns users from MongoDB.

<br /><br />

You can also send query parameters for searching.

</p>


<SyntaxHighlighter language="text" style={oneDark}>
{`Search User

http://localhost:5000/api/users?search=john


Filter By City

http://localhost:5000/api/users?city=London`}
</SyntaxHighlighter>


<p>

The backend reads these values:

</p>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`req.query.search

req.query.city`}
</SyntaxHighlighter>


<p>

Example:

<br /><br />

If the URL is:

</p>


<SyntaxHighlighter language="text" style={oneDark}>
{`http://localhost:5000/api/users?search=john`}
</SyntaxHighlighter>


<p>

Express creates:

</p>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`{
    search: "john"
}`}
</SyntaxHighlighter>


<div className="alert alert-info mt-3">
<strong>Testing Tip</strong><br />
Browser testing is useful for simple GET requests.
For advanced testing use Postman.
</div>


</Card.Body>
</Card>



<Card className="mb-4">
<Card.Body>

<h4>Step 15 — Test API in Postman</h4>

<p>
Postman is a tool used to test APIs before connecting
them with frontend applications.
</p>


<p>

Create a new <strong>GET Request</strong>:

</p>


<SyntaxHighlighter language="text" style={oneDark}>
{`GET

http://localhost:5000/api/users`}
</SyntaxHighlighter>


<h5 className="mt-4">Explanation</h5>

<p>

Postman allows us to test different search and filter
conditions.

<br /><br />

Example:

</p>


<SyntaxHighlighter language="text" style={oneDark}>
{`GET

http://localhost:5000/api/users?search=john&city=London`}
</SyntaxHighlighter>


<p>

The backend receives:

</p>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`req.query = {

    search: "john",

    city: "London"

}`}
</SyntaxHighlighter>


<p>

Expected Response:

</p>


<SyntaxHighlighter language="json" style={oneDark}>
{`{
    "success": true,
    "count": 1,
    "data": [
        {
            "name": "John",
            "city": "London"
        }
    ]
}`}
</SyntaxHighlighter>


<div className="alert alert-primary mt-3">

<strong>Postman Checklist</strong>

<br />

✔ Method should be GET

<br />

✔ Server should be running

<br />

✔ MongoDB should be connected

<br />

✔ Response status should be 200

</div>


</Card.Body>
</Card>

<Card className="mb-4">
<Card.Body>

<h4>Step 16 — Connect React Frontend</h4>

<p>
After testing the backend API successfully, connect it with
your React application.
React will send requests to Express and display the
filtered users.
</p>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`// React Component

import axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios
        .get("http://localhost:5000/api/users")
        .then((response) => {

            setUsers(response.data.data);

        });

    }, []);


    return (
        <div>
            Users List
        </div>
    );

};`}
</SyntaxHighlighter>


<h5 className="mt-4">Explanation</h5>

<p>

The React frontend communicates with the backend using
an HTTP request.

<br /><br />

The complete flow:

<br /><br />

✔ React sends API request

<br />

✔ Express receives the request

<br />

✔ MongoDB searches the database

<br />

✔ Express returns JSON response

<br />

✔ React displays the data

</p>


<SyntaxHighlighter language="text" style={oneDark}>
{`React

   ↓

Axios / Fetch API

   ↓

Express Backend

   ↓

MongoDB

   ↓

JSON Response

   ↓

React UI`}
</SyntaxHighlighter>


<div className="alert alert-success mt-3">

<strong>Frontend Tip</strong><br />

Keep API URLs separate using environment variables
instead of writing them directly inside components.

</div>


</Card.Body>
</Card>



<Card className="mb-4">
<Card.Body>

<h4>Step 17 — Common Mistakes</h4>

<p>
Beginners often make small mistakes while creating
search and filter APIs.
Understanding these mistakes helps you debug faster.
</p>


<h5 className="mt-4">Mistake 1 — Using req.body Instead of req.query</h5>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`// Wrong

const { search } = req.body;


// Correct

const { search } = req.query;`}
</SyntaxHighlighter>


<p>

GET requests send data through URL parameters,
therefore Express reads them using
<code>req.query</code>.

</p>



<h5 className="mt-4">Mistake 2 — Forgetting await</h5>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`// Wrong

const users = User.find(query);


// Correct

const users = await User.find(query);`}
</SyntaxHighlighter>


<p>

MongoDB operations are asynchronous.
The <code>await</code> keyword waits until the database
returns the result.

</p>



<h5 className="mt-4">Mistake 3 — Missing Case Insensitive Search</h5>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`// Without options

{
    $regex: search
}


// Better

{
    $regex: search,
    $options: "i"
}`}
</SyntaxHighlighter>


<p>

Without <code>$options: "i"</code>, searching for
<strong>john</strong> and <strong>John</strong> can give
different results.

</p>



<div className="alert alert-warning mt-3">

<strong>Debugging Tip</strong><br />

Always check:
<br />

✔ Console errors

<br />

✔ API URL

<br />

✔ Query parameters

<br />

✔ MongoDB connection

</div>


</Card.Body>
</Card>



<Card className="mb-4">
<Card.Body>

<h4>Step 18 — Best Practices</h4>

<p>
A working API is good, but a clean and scalable API is
better.
Follow these practices when building real projects.
</p>



<h5 className="mt-4">1. Validate User Input</h5>

<p>

Never directly trust values coming from the frontend.

Always validate:

<br />

✔ Search values

<br />

✔ Numbers

<br />

✔ IDs

<br />

✔ Required fields

</p>



<SyntaxHighlighter language="javascript" style={oneDark}>
{`if (!search) {

    return res.status(400).json({
        message: "Search value required"
    });

}`}
</SyntaxHighlighter>



<h5 className="mt-4">2. Use Pagination</h5>


<p>

Returning thousands of records can slow down your
application.

Use pagination:

</p>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`const users = await User
    .find(query)
    .limit(10)
    .skip(20);`}
</SyntaxHighlighter>



<h5 className="mt-4">3. Create Database Indexes</h5>


<p>

Indexes improve search performance for frequently used
fields.

</p>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`const userSchema = new mongoose.Schema({

    name: {
        type: String,
        index: true
    }

});`}
</SyntaxHighlighter>



<h5 className="mt-4">4. Handle Errors Properly</h5>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`try {

    const users = await User.find(query);

    res.json(users);

}
catch(error) {

    res.status(500).json({
        message: error.message
    });

}`}
</SyntaxHighlighter>



<h5 className="mt-4">Complete Search API Flow</h5>


<SyntaxHighlighter language="text" style={oneDark}>
{`User Types Search

        ↓

React sends Request

        ↓

Express reads req.query

        ↓

Build MongoDB Query

        ↓

MongoDB Finds Data

        ↓

Return JSON Response

        ↓

React Displays Results`}
</SyntaxHighlighter>



<div className="alert alert-primary mt-3">

<strong>🎉 Tutorial Completed</strong>

<br /><br />

You have learned:

<br />

✔ Reading query parameters

<br />

✔ Creating dynamic MongoDB queries

<br />

✔ Searching with $regex

<br />

✔ Applying multiple filters

<br />

✔ Testing APIs

<br />

✔ Connecting React with Backend

<br />

✔ Building better APIs using best practices

</div>


</Card.Body>
</Card>


</>
)}


{currentPage === 4 && (
<>

<Card className="mb-4">
<Card.Body>

<h4>Step 19 — Interview Questions</h4>

<p>
After building a Search and Filter API, interviewers usually
ask questions to check your understanding of backend concepts.
</p>


<h5 className="mt-4">Question 1 — How does Express read query parameters?</h5>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`Example URL:

http://localhost:5000/api/users?search=john


Express reads it using:

req.query.search`}
</SyntaxHighlighter>


<p>

The <code>req.query</code> object contains all values sent
after the <code>?</code> in the URL.

</p>



<h5 className="mt-4">
Question 2 — Why do we create a dynamic MongoDB query?
</h5>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`const query = {};

if(search){
    query.name = {
        $regex: search,
        $options: "i"
    };
}

if(city){
    query.city = city;
}`}
</SyntaxHighlighter>


<p>

A dynamic query allows users to apply different filters
without creating separate API endpoints.

<br /><br />

For example:

<br />

✔ Search only

<br />

✔ City only

<br />

✔ Company only

<br />

✔ All filters together

</p>



<h5 className="mt-4">
Question 3 — What is $regex in MongoDB?
</h5>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`{
    name: {
        $regex: "john",
        $options: "i"
    }
}`}
</SyntaxHighlighter>


<p>

<code>$regex</code> performs pattern matching in MongoDB.

<br /><br />

It allows partial searching.

<br /><br />

Example:

</p>


<SyntaxHighlighter language="text" style={oneDark}>
{`Database:

John Smith
Johnny
Johnson


Search:

john


Result:

John Smith
Johnny
Johnson`}
</SyntaxHighlighter>



<h5 className="mt-4">
Question 4 — Difference between req.params and req.query?
</h5>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`// Route Parameter

GET /api/users/123

req.params.id


// Query Parameter

GET /api/users?city=London

req.query.city`}
</SyntaxHighlighter>


<p>

<strong>req.params</strong> is used for specific resources.

<br />

Example: User ID, Product ID

<br /><br />

<strong>req.query</strong> is used for filtering,
searching, sorting and pagination.

</p>



<h5 className="mt-4">
Question 5 — How can you improve search performance?
</h5>


<p>

For large databases, improve performance by:

<br />

✔ Creating MongoDB indexes

<br />

✔ Adding pagination

<br />

✔ Limiting returned fields

<br />

✔ Avoiding unnecessary database queries

</p>


<div className="alert alert-info mt-3">

<strong>Interview Tip</strong><br />

Explain the complete flow:
React → Express → Query Parameters → MongoDB Query →
JSON Response → React UI

</div>


</Card.Body>
</Card>




<Card className="mb-4">
<Card.Body>

<h4>Step 20 — Complete Backend Flow Diagram</h4>

<p>
Let's understand the complete journey of a search request
from the frontend to the database and back.
</p>


<SyntaxHighlighter language="text" style={oneDark}>
{`                User

                 |

                 ↓

        React Search Input

                 |

                 ↓

        Axios / Fetch Request

                 |

                 ↓

        Express API Route

        GET /api/users?search=john

                 |

                 ↓

        Controller Function

                 |

                 ↓

        Read req.query

                 |

                 ↓

        Build Dynamic Query

                 |

                 ↓

        MongoDB find(query)

                 |

                 ↓

        Matching Documents

                 |

                 ↓

        JSON Response

                 |

                 ↓

        React Updates UI`}
</SyntaxHighlighter>


<h5 className="mt-4">Explanation</h5>

<p>

The complete process happens in multiple steps.

</p>


<p>

<strong>Step 1:</strong>

The user enters a search value in React.

<br /><br />


<strong>Step 2:</strong>

React sends an API request with query parameters.

</p>


<SyntaxHighlighter language="text" style={oneDark}>
{`GET /api/users?search=john`}
</SyntaxHighlighter>


<p>

<strong>Step 3:</strong>

Express receives the request and reads:

</p>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`req.query.search`}
</SyntaxHighlighter>


<p>

<strong>Step 4:</strong>

Backend creates a MongoDB query.

</p>


<SyntaxHighlighter language="javascript" style={oneDark}>
{`{
    name: {
        $regex: "john",
        $options: "i"
    }
}`}
</SyntaxHighlighter>


<p>

<strong>Step 5:</strong>

MongoDB searches the collection and returns matching
documents.

<br /><br />

<strong>Step 6:</strong>

Express sends the data back as JSON.

</p>


<SyntaxHighlighter language="json" style={oneDark}>
{`{
    success: true,
    data: [
        {
            name: "John"
        }
    ]
}`}
</SyntaxHighlighter>


<p>

<strong>Step 7:</strong>

React receives the response and updates the user interface.

</p>



<div className="alert alert-success mt-3">

<strong>Final Understanding</strong>

<br /><br />

A Search Filter API connects multiple technologies:

<br />

React → Axios → Express → Mongoose → MongoDB

<br /><br />

Each layer has a specific responsibility.

</div>



<div className="alert alert-primary mt-3">

<strong>🎉 Search Filter Backend Tutorial Completed</strong>

<br /><br />

You have successfully learned:

<br />

✔ Express API creation

<br />

✔ MongoDB connection

<br />

✔ Query parameters

<br />

✔ Dynamic queries

<br />

✔ MongoDB filtering

<br />

✔ Regex searching

<br />

✔ React integration

<br />

✔ API testing

<br />

✔ Backend best practices

</div>


</Card.Body>
</Card>


</>
)}







 <Pagination className="mb-0">

            <Pagination.First
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
            />

            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            />

            {[...Array(totalPages)].map((_, index) => (

                <Pagination.Item
                    key={index}
                    active={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                >
                    {index + 1}
                </Pagination.Item>

            ))}

            <Pagination.Next
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
            />

            <Pagination.Last
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(totalPages)}
            />

        </Pagination>

    <hr />

    <div className="d-flex justify-content-between">

        <small className="text-muted">
            Showing Steps{" "}
            {(currentPage - 1) * stepsPerPage + 1}
            {" - "}
            {Math.min(currentPage * stepsPerPage, totalSteps)}
        </small>
        <small className="fw-semibold text-primary">
            {Math.round((currentPage / totalPages) * 100)}% Completed
        </small>

    </div>

    </Container>
    
  );
};

export default SearchFilterBackend;