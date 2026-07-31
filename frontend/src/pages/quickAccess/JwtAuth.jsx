import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import TutorialPagination from "../../components/TutorialPagination";
import TutorialRoadmap from "../../components/TutorialRoadmap";




const jwtAuthenticationPages = [

    {
        color: "text-primary mb-0",
        badge: "bg-primary",

        items: [

            "🔐 What is Authentication?",
            "⚖️ Authentication vs Authorization",
            "🎟️ What is JWT?",
            "🧩 JWT Token Structure",
            "🔄 JWT Authentication Flow",
            "🔑 Access Token & Refresh Token"

        ]

    },



    {
        color: "text-success mb-0",
        badge: "bg-success",

        items: [

            "👤 Create User Model",
            "🔒 Password Hashing with bcrypt",
            "📝 Register API",
            "🔓 Login API",
            "🎟️ Generate JWT Token",
            "📤 Send Token Response"

        ]

    },



    {
        color: "text-warning mb-0",
        badge: "bg-warning text-dark",

        items: [

            "🛡️ JWT Middleware",
            "✅ Verify JWT Token",
            "🔐 Protect Private Routes",
            "🙋 Get Logged-in User",
            "👑 Role Based Authorization",
            "⚠️ Handle Authentication Errors"

        ]

    },



    {
        color: "text-danger mb-0",
        badge: "bg-danger",

        items: [

            "⚛️ Create Login Form",
            "🌐 Connect Auth API",
            "💾 Store JWT Token",
            "📨 Axios Authorization Header",
            "🚪 Protected React Routes",
            "🚪 Logout & Token Remove"

        ]

    },



    {
        color: "text-info mb-0",
        badge: "bg-info",

        items: [

            "🔄 Complete JWT Flow Diagram",
            "❌ Common JWT Mistakes",
            "🛡️ JWT Security Best Practices",
            "⏳ Token Expiration Handling",
            "♻️ Refresh Token Flow",
            "💼 JWT Interview Questions"

        ]

    }

];

const JwtAuth = () => {


const [email, setEmail] = useState("demo@gmail.com");
const [password, setPassword] = useState("123456");


const [currentPage,setCurrentPage] = useState(1);

const stepsPerPage = 6;

const totalSteps = 30;



const handleLogin = () => {

  if (
    email === "demo@gmail.com" &&
    password === "123456"
  ) {

    alert("✅ Login Successfully");

  } else {

    alert("❌ Invalid Email or Password");

  }

};


return (

<Container className="my-5">


<h2 className="mb-4">

JWT Authentication — Tutorial

</h2>



{/* LIVE JWT UI */}


<Card className="mb-5">

<Card.Body>


<h4>
Live Login Example
</h4>


<Form.Group className="mb-3">

<Form.Label>
Email
</Form.Label>


<Form.Control

type="email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>


</Form.Group>





<Form.Group className="mb-3">

<Form.Label>
Password
</Form.Label>


<Form.Control

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>


</Form.Group>





<div className="mb-3">

<small className="text-muted">

Demo User:

<br />

Email: <b>demo@gmail.com</b>

<br />

Password: <b>123456</b>

</small>

</div>





<Button

onClick={handleLogin}

>

Login

</Button>



</Card.Body>

</Card>










{
currentPage === 1 &&

<>


<TutorialRoadmap
    description="Master JWT Authentication step by step using Express, MongoDB, bcrypt, JWT and React."
    goal="Complete all five pages to build a secure JWT Authentication system from registration to protected routes and React integration."
    pages={jwtAuthenticationPages}
/>


<h3>
Page 1 — JWT Basics
</h3>


{/* STEP 1 */}


<Card className="mb-3">

<Card.Body>


<h5>
1. What is Authentication?
</h5>


<p>

Authentication verifies the identity of a user
before allowing access.

</p>



<SyntaxHighlighter

language="javascript"

style={oneDark}

>

{`
User

 ↓

Enter Email & Password

 ↓

Verify User

 ↓

Allow Access
`}


</SyntaxHighlighter>


</Card.Body>

</Card>







{/* STEP 2 */}


<Card className="mb-3">

<Card.Body>


<h5>
2. Authentication vs Authorization
</h5>


<p>

Authentication checks who the user is.
Authorization checks what the user can access.

</p>



<SyntaxHighlighter

language="javascript"

style={oneDark}

>

{`
Authentication

Who are you?

        ↓

Login


Authorization

What can you access?

        ↓

Permissions
`}


</SyntaxHighlighter>


</Card.Body>

</Card>







{/* STEP 3 */}


<Card className="mb-3">

<Card.Body>


<h5>
3. What is JWT?
</h5>


<p>

JWT (JSON Web Token) is a secure token used
to maintain user authentication.

</p>



<SyntaxHighlighter

language="javascript"

style={oneDark}

>

{`
User Login

      ↓

Server Creates JWT

      ↓

Send Token

      ↓

Client Stores Token
`}


</SyntaxHighlighter>



</Card.Body>

</Card>







{/* STEP 4 */}


<Card className="mb-3">

<Card.Body>


<h5>
4. JWT Token Structure
</h5>



<p>

JWT contains three parts:
Header, Payload and Signature.

</p>



<SyntaxHighlighter

language="javascript"

style={oneDark}

>

{`
JWT

 ↓

Header

 ↓

Payload

 ↓

Signature
`}


</SyntaxHighlighter>


</Card.Body>

</Card>







{/* STEP 5 */}


<Card className="mb-3">

<Card.Body>


<h5>
5. JWT Authentication Flow
</h5>



<SyntaxHighlighter

language="javascript"

style={oneDark}

>

{`
User Login

      ↓

Backend Verify User

      ↓

Generate JWT Token

      ↓

Send Token

      ↓

Client Stores Token

      ↓

Access Protected API
`}


</SyntaxHighlighter>



</Card.Body>

</Card>







{/* STEP 6 */}


<Card className="mb-3">

<Card.Body>


<h5>
6. Access Token & Refresh Token
</h5>



<p>

Access token is used for API requests.
Refresh token creates a new access token.

</p>



<SyntaxHighlighter

language="javascript"

style={oneDark}

>

{`
Login

 ↓

Access Token

 ↓

API Request


Refresh Token

 ↓

New Access Token
`}


</SyntaxHighlighter>


</Card.Body>

</Card>





</>

}


{
currentPage === 2 &&

<>



{/* STEP 7 */}

<Card className="mb-3">

<Card.Body>


<h5>
7. Create User Model
</h5>


<p>

The User model stores user information like name,
email and password in MongoDB.

</p>


<SyntaxHighlighter
language="javascript"
style={oneDark}
>

{`
const userSchema = new mongoose.Schema({

  name:String,

  email:String,

  password:String

});

const User = mongoose.model(
  "User",
  userSchema
);
`}

</SyntaxHighlighter>


</Card.Body>

</Card>






{/* STEP 8 */}

<Card className="mb-3">

<Card.Body>


<h5>
8. Password Hashing with bcrypt
</h5>


<p>

Hash passwords before saving them to the database.

</p>


<SyntaxHighlighter
language="javascript"
style={oneDark}
>

{`
const bcrypt = require("bcrypt");

const hashedPassword =
await bcrypt.hash(
  password,
  10
);
`}

</SyntaxHighlighter>


</Card.Body>

</Card>






{/* STEP 9 */}

<Card className="mb-3">

<Card.Body>


<h5>
9. Register API
</h5>


<p>

The Register API creates a new user account.

</p>


<SyntaxHighlighter
language="javascript"
style={oneDark}
>

{`
app.post(

"/register",

async(req,res)=>{

  const user =
  await User.create(
    req.body
  );

  res.json(user);

});
`}

</SyntaxHighlighter>


</Card.Body>

</Card>






{/* STEP 10 */}

<Card className="mb-3">

<Card.Body>


<h5>
10. Login API
</h5>


<p>

The Login API verifies the user's email and password.

</p>


<SyntaxHighlighter
language="javascript"
style={oneDark}
>

{`
app.post(

"/login",

async(req,res)=>{

  const user =
  await User.findOne({

    email:req.body.email

  });

});
`}

</SyntaxHighlighter>


</Card.Body>

</Card>






{/* STEP 11 */}

<Card className="mb-3">

<Card.Body>


<h5>
11. Generate JWT Token
</h5>


<p>

Create a JWT token after successful login.

</p>


<SyntaxHighlighter
language="javascript"
style={oneDark}
>

{`
const jwt = require("jsonwebtoken");

const token = jwt.sign(

  { id:user._id },

  "secretKey",

  {
    expiresIn:"1h"
  }

);
`}

</SyntaxHighlighter>


</Card.Body>

</Card>






{/* STEP 12 */}

<Card className="mb-3">

<Card.Body>


<h5>
12. Send Token Response
</h5>


<p>

Return the generated JWT token to the frontend.

</p>


<SyntaxHighlighter
language="javascript"
style={oneDark}
>

{`
res.json({

  message:
  "Login Successful",

  token

});
`}

</SyntaxHighlighter>


</Card.Body>

</Card>



</>

}


{
currentPage === 3 &&

<>


{/* STEP 13 */}

<Card className="mb-3">

<Card.Body>

<h5>
13. JWT Middleware
</h5>

<p>
JWT middleware checks whether the incoming request contains a valid token.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{

 const token =
 req.headers.authorization;

 if(!token){

  return res.status(401).json({
   message:"Token Missing"
  });

 }

 next();

};
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 14 */}

<Card className="mb-3">

<Card.Body>

<h5>
14. Verify JWT Token
</h5>

<p>
Verify the JWT token before allowing access to protected routes.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const decoded = jwt.verify(

 token,

 process.env.JWT_SECRET

);

req.user = decoded;
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 15 */}

<Card className="mb-3">

<Card.Body>

<h5>
15. Protect Private Routes
</h5>

<p>
Use authentication middleware to protect private API routes.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
router.get(

 "/profile",

 auth,

 (req,res)=>{

  res.json({
   message:"Private Route"
  });

 }

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 16 */}

<Card className="mb-3">

<Card.Body>

<h5>
16. Get Logged-in User
</h5>

<p>
Access logged-in user information from <code>req.user</code>.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
router.get(

 "/me",

 auth,

 (req,res)=>{

  res.json(
   req.user
  );

 }

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 17 */}

<Card className="mb-3">

<Card.Body>

<h5>
17. Role Based Authorization
</h5>

<p>
Allow access only to users with specific roles like Admin or User.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
if(

 req.user.role !== "admin"

){

 return res.status(403).json({

  message:"Access Denied"

 });

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 18 */}

<Card className="mb-3">

<Card.Body>

<h5>
18. Handle Authentication Errors
</h5>

<p>
Return appropriate responses for missing, invalid or expired tokens.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
try{

 jwt.verify(
  token,
  process.env.JWT_SECRET
 );

}catch{

 return res.status(401).json({

  message:"Invalid Token"

 });

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>


</>

}



{
currentPage === 4 &&

<>


{/* STEP 19 */}

<Card className="mb-3">

<Card.Body>

<h5>
19. Create Login Form
</h5>

<p>
Create a React login form to collect email and password.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

<form>

 <input />

 <input />

 <button>
  Login
 </button>

</form>
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 20 */}

<Card className="mb-3">

<Card.Body>

<h5>
20. Connect Auth API
</h5>

<p>
Send login credentials to the backend using Axios.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const response =
await axios.post(

 "/login",

 {

  email,

  password

 }

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 21 */}

<Card className="mb-3">

<Card.Body>

<h5>
21. Store JWT Token
</h5>

<p>
Save the JWT token after a successful login.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
localStorage.setItem(

 "token",

 response.data.token

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 22 */}

<Card className="mb-3">

<Card.Body>

<h5>
22. Axios Authorization Header
</h5>

<p>
Send the JWT token with every protected request.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
axios.get(

 "/profile",

 {

  headers:{

   Authorization:

   localStorage.getItem(

    "token"

   )

  }

 }

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 23 */}

<Card className="mb-3">

<Card.Body>

<h5>
23. Protected React Routes
</h5>

<p>
Only authenticated users can access protected pages.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
return token

?

<Dashboard />

:

<Navigate

 to="/login"

/>;
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 24 */}

<Card className="mb-3">

<Card.Body>

<h5>
24. Logout & Token Remove
</h5>

<p>
Remove the token and redirect the user to the login page.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const logout = ()=>{

 localStorage.removeItem(

  "token"

 );

 navigate("/login");

};
`}
</SyntaxHighlighter>

</Card.Body>

</Card>


</>

}

{
currentPage === 5 &&

<>


{/* STEP 25 */}

<Card className="mb-3">

<Card.Body>

<h5>
25. Complete JWT Flow Diagram
</h5>

<p>
Complete authentication flow from login to accessing protected routes.
</p>

<p>
User → Login → Verify User → Generate JWT → Store Token → Protected API → Response
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
app.post(

 "/login",

 async(req,res)=>{

  const token = jwt.sign(

   { id:user._id },

   process.env.JWT_SECRET,

   { expiresIn:"1h" }

  );

  res.json({ token });

 }
);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 26 */}

<Card className="mb-3">

<Card.Body>

<h5>
26. Common JWT Mistakes
</h5>

<p>
Avoid common mistakes while implementing JWT authentication.
</p>

<p>
Wrong Secret • Missing Token • No Expiry • Storing Sensitive Data
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
jwt.verify(

 token,

 process.env.JWT_SECRET

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 27 */}

<Card className="mb-3">

<Card.Body>

<h5>
27. JWT Security Best Practices
</h5>

<p>
Always keep JWT authentication secure in production.
</p>

<p>
Hash Passwords • Use HTTPS • Short Expiry • Secure Secrets
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const token = jwt.sign(

 payload,

 process.env.JWT_SECRET,

 {

  expiresIn:"15m"

 }

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 28 */}

<Card className="mb-3">

<Card.Body>

<h5>
28. Token Expiration Handling
</h5>

<p>
Detect expired tokens and ask users to log in again or refresh the token.
</p>

<p>
Expired Token → Refresh Token → New Access Token
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
try{

 jwt.verify(

  token,

  process.env.JWT_SECRET

 );

}catch{

 return res.status(401).json({

  message:"Token Expired"

 });

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 29 */}

<Card className="mb-3">

<Card.Body>

<h5>
29. Refresh Token Flow
</h5>

<p>
Use a refresh token to generate a new access token after expiration.
</p>

<p>
Login → Access Token → Expired → Refresh Token → New Access Token
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const accessToken = jwt.sign(

 payload,

 process.env.JWT_SECRET,

 {

  expiresIn:"15m"

 }

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 30 */}

<Card className="mb-3">

<Card.Body>

<h5>
30. JWT Interview Questions
</h5>

<p>
Frequently asked JWT interview questions.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
Q. What is JWT?

A. JSON Web Token used
for authentication.


Q. Why use bcrypt?

A. To hash passwords.


Q. What is Refresh Token?

A. It generates a new
Access Token.


Q. Where is JWT stored?

A. localStorage,
sessionStorage or Cookies.
`}
</SyntaxHighlighter>

</Card.Body>

</Card>


</>

}



<TutorialPagination


currentPage={currentPage}

setCurrentPage={setCurrentPage}

totalSteps={totalSteps}

stepsPerPage={stepsPerPage}


/>



</Container>


);


};


export default JwtAuth;