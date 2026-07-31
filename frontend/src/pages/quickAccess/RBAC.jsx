import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import TutorialRoadmap from "../../components/TutorialRoadmap";
import TutorialPagination from "../../components/TutorialPagination";



const rbacPages = [

  {
    color: "text-primary mb-0",
    badge: "bg-primary",

    items: [

      "🛡️ What is RBAC?",
      "❓ Why Use RBAC?",
      "🔐 Authentication vs Authorization vs RBAC",
      "👥 Common User Roles",
      "🔄 RBAC Authorization Flow",
      "🏢 Real-world RBAC Examples"

    ]

  },



  {
    color: "text-success mb-0",
    badge: "bg-success",

    items: [

      "👤 Add Role Field in User Model",
      "🆕 Assign Default User Role",
      "📝 Register Users with Roles",
      "🎟️ Include Role in JWT Token",
      "🛡️ Create Role Middleware",
      "✅ Check User Role"

    ]

  },



  {
    color: "text-warning mb-0",
    badge: "bg-warning text-dark",

    items: [

      "👑 Admin Only Routes",
      "👥 User & Admin Routes",
      "🔀 Multiple Role Authorization",
      "⛔ Access Denied Response",
      "🗂️ Protect CRUD Operations",
      "⚠️ Handle Authorization Errors"

    ]

  },



  {
    color: "text-danger mb-0",
    badge: "bg-danger",

    items: [

      "⚛️ Read User Role",
      "🙈 Hide UI Based on Roles",
      "🛣️ Protect React Routes",
      "🧭 Role Based Navigation Menu",
      "↩️ Redirect Unauthorized Users",
      "🚪 Logout & Clear User Role"

    ]

  },



  {
    color: "text-info mb-0",
    badge: "bg-info text-dark",

    items: [

      "🔄 RBAC Complete Flow Diagram",
      "❌ Common RBAC Mistakes",
      "🛡️ RBAC Best Practices",
      "🔑 Permission-Based Authorization",
      "⚙️ Dynamic Roles & Permissions",
      "💼 RBAC Interview Questions"

    ]

  }

];



const RBAC = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const stepsPerPage = 6;
  const totalSteps = 30;

  return (

    <Container className="my-5">

      <h2 className="mb-4">
        Role Based Access Control (RBAC) — Tutorial
      </h2>

      

      {/* ===========================
          Live Example
      ============================ */}

      <Card className="mb-5">

        <Card.Body>

          <h4>
            Live RBAC Example
          </h4>

          {/* Live Demo UI */}

        </Card.Body>

      </Card>



      {/* ===========================
          Page 1
      ============================ */}

      {
        currentPage === 1 &&
        <>
    <TutorialRoadmap
    title="Role Based Access Control (RBAC) Roadmap"
    description="Learn Role Based Access Control (RBAC) step by step using Express, MongoDB, JWT and React."
    goal="Complete all five pages to build a secure Role Based Access Control system with authentication, authorization and protected React applications."
    pages={rbacPages}
/>
    {
currentPage === 1 &&

<>

{/* STEP 1 */}

<Card className="mb-3">

<Card.Body>

<h5>
1. What is Role Based Access Control (RBAC)?
</h5>

<p>
RBAC restricts access based on the user's role. Different roles have different permissions.
</p>

<p>
User Login → Verify User → Check Role → Grant or Deny Access
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const user = {
  name: "John",
  role: "admin"
};

console.log(user.role);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 2 */}

<Card className="mb-3">

<Card.Body>

<h5>
2. Why Use RBAC?
</h5>

<p>
RBAC improves security by allowing users to access only the resources they need.
</p>

<p>
Assign Role → Check Permission → Allow Authorized Actions
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
if (user.role === "admin") {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 3 */}

<Card className="mb-3">

<Card.Body>

<h5>
3. Authentication vs Authorization vs RBAC
</h5>

<p>
Authentication verifies identity, Authorization checks access, and RBAC controls permissions using roles.
</p>

<p>
Login → Verify User → Check Role → Access Resource
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const user = {
  authenticated: true,
  role: "editor"
};

console.log(user.authenticated);
console.log(user.role);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 4 */}

<Card className="mb-3">

<Card.Body>

<h5>
4. Common User Roles
</h5>

<p>
Applications commonly use roles like Admin, Manager, Editor and User.
</p>

<p>
Admin → Manager → Editor → User
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const roles = [
  "admin",
  "manager",
  "editor",
  "user"
];

console.log(roles);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 5 */}

<Card className="mb-3">

<Card.Body>

<h5>
5. RBAC Authorization Flow
</h5>

<p>
After login, the application checks the user's role before accessing protected resources.
</p>

<p>
Login → JWT → Read Role → Check Permission → Access Route
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
function hasAccess(role) {
  return role === "admin";
}

console.log(hasAccess("admin"));
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 6 */}

<Card className="mb-3">

<Card.Body>

<h5>
6. Real-world RBAC Examples
</h5>

<p>
Different users can perform different actions based on their assigned role.
</p>

<p>
Admin → Manage Users | Editor → Edit Posts | User → View Content
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const permissions = {
  admin: ["create", "update", "delete"],
  editor: ["update"],
  user: ["read"]
};

console.log(permissions.admin);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>

</>

}
        </>
      }



      {/* ===========================
          Page 2
      ============================ */}

      {
currentPage === 2 &&

<>


{/* STEP 7 */}

<Card className="mb-3">

<Card.Body>

<h5>
7. Add Role Field in User Model
</h5>

<p>
Add a role field to identify each user's permissions.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const userSchema = new mongoose.Schema({

  name:String,

  email:String,

  password:String,

  role:{

    type:String,

    default:"user"

  }

});
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 8 */}

<Card className="mb-3">

<Card.Body>

<h5>
8. Assign Default User Role
</h5>

<p>
New users receive the default <code>user</code> role during registration.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const user = await User.create({

  name,

  email,

  password,

  role:"user"

});
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 9 */}

<Card className="mb-3">

<Card.Body>

<h5>
9. Register Users with Roles
</h5>

<p>
Create users with different roles like Admin or User.
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
 await User.create({

  ...req.body,

  role:req.body.role

 });

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
10. Include Role in JWT Token
</h5>

<p>
Store the user's role inside the JWT token.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const token = jwt.sign(

{

 id:user._id,

 role:user.role

},

process.env.JWT_SECRET

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 11 */}

<Card className="mb-3">

<Card.Body>

<h5>
11. Create Role Middleware
</h5>

<p>
Create middleware to allow only specific roles.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const allowRole = (role)=>{

 return(req,res,next)=>{

  if(req.user.role !== role){

   return res.status(403).json({

    message:"Access Denied"

   });

  }

  next();

 };

};
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 12 */}

<Card className="mb-3">

<Card.Body>

<h5>
12. Check User Role
</h5>

<p>
Check the user's role before allowing access.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
if(

 req.user.role === "admin"

){

 console.log(

  "Admin Access"

 );

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>


</>

}



      {/* ===========================
          Page 3
      ============================ */}

      {
currentPage === 3 &&

<>


{/* STEP 13 */}

<Card className="mb-3">

<Card.Body>

<h5>
13. Admin Only Routes
</h5>

<p>
Allow only Admin users to access specific routes.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
router.get(

 "/admin",

 auth,

 allowRole("admin"),

 (req,res)=>{

  res.send(
   "Admin Panel"
  );

 }

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 14 */}

<Card className="mb-3">

<Card.Body>

<h5>
14. User & Admin Routes
</h5>

<p>
Allow both User and Admin roles to access a route.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
if(

 req.user.role === "user" ||

 req.user.role === "admin"

){

 next();

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 15 */}

<Card className="mb-3">

<Card.Body>

<h5>
15. Multiple Role Authorization
</h5>

<p>
Authorize multiple roles using an array.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const roles = [

 "admin",

 "editor"

];

if(

 roles.includes(

  req.user.role

 )

){

 next();

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 16 */}

<Card className="mb-3">

<Card.Body>

<h5>
16. Access Denied Response
</h5>

<p>
Return a 403 response when permission is denied.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
return res.status(403).json({

 message:

 "Access Denied"

});
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 17 */}

<Card className="mb-3">

<Card.Body>

<h5>
17. Protect CRUD Operations
</h5>

<p>
Restrict Create, Update and Delete operations by role.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
router.delete(

 "/users/:id",

 auth,

 allowRole("admin"),

 deleteUser

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 18 */}

<Card className="mb-3">

<Card.Body>

<h5>
18. Handle Authorization Errors
</h5>

<p>
Return clear error messages for unauthorized requests.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
try{

 next();

}catch{

 res.status(403).json({

  message:

  "Unauthorized"

 });

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>


</>

}


      {/* ===========================
          Page 4
      ============================ */}

      {
currentPage === 4 &&

<>


{/* STEP 19 */}

<Card className="mb-3">

<Card.Body>

<h5>
19. Read User Role
</h5>

<p>
Read the logged-in user's role after authentication.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const user = JSON.parse(

 localStorage.getItem(

  "user"

 )

);

console.log(

 user.role

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 20 */}

<Card className="mb-3">

<Card.Body>

<h5>
20. Hide UI Based on Roles
</h5>

<p>
Show or hide UI elements based on the user's role.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
{

 user.role === "admin"

 &&

 <button>

  Delete User

 </button>

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 21 */}

<Card className="mb-3">

<Card.Body>

<h5>
21. Protect React Routes
</h5>

<p>
Allow access only to users with the required role.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
return

user.role === "admin"

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





{/* STEP 22 */}

<Card className="mb-3">

<Card.Body>

<h5>
22. Role Based Navigation Menu
</h5>

<p>
Display navigation links according to the user's role.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
{

 user.role === "admin"

 &&

 <Link to="/admin">

  Admin

 </Link>

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 23 */}

<Card className="mb-3">

<Card.Body>

<h5>
23. Redirect Unauthorized Users
</h5>

<p>
Redirect users when they do not have permission.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
if(

 user.role !== "admin"

){

 return (

  <Navigate

   to="/"

  />

 );

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 24 */}

<Card className="mb-3">

<Card.Body>

<h5>
24. Logout & Clear User Role
</h5>

<p>
Remove user information and redirect to the login page.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
localStorage.removeItem(

 "user"

);

localStorage.removeItem(

 "token"

);

navigate(

 "/login"

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>


</>

}



      {/* ===========================
          Page 5
      ============================ */}
{
currentPage === 5 &&

<>


{/* STEP 25 */}

<Card className="mb-3">

<Card.Body>

<h5>
25. RBAC Complete Flow Diagram
</h5>

<p>
Complete Role Based Access Control flow from user login to route authorization.
</p>

<p>
Login → JWT → User Role → Middleware → Permission Check → Allow or Deny
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
User Login

      ↓

Generate JWT

      ↓

Include User Role

      ↓

Request API

      ↓

Verify JWT

      ↓

Check User Role

      ↓

Allow Access

      OR

Access Denied
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 26 */}

<Card className="mb-3">

<Card.Body>

<h5>
26. Common RBAC Mistakes
</h5>

<p>
Avoid common mistakes while implementing Role Based Access Control.
</p>

<p>
No Role Check • Frontend Only Validation • Everyone is Admin • Missing Middleware
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
if(

 req.user.role

){

 next();

}


// Wrong

// Every logged-in user

// gets access
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 27 */}

<Card className="mb-3">

<Card.Body>

<h5>
27. RBAC Best Practices
</h5>

<p>
Follow secure practices when implementing role-based authorization.
</p>

<p>
Least Privilege • Backend Validation • Secure JWT • Separate Permissions
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

  message:

  "Access Denied"

 });

}
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 28 */}

<Card className="mb-3">

<Card.Body>

<h5>
28. Permission-Based Authorization
</h5>

<p>
Permissions provide more detailed access control than roles.
</p>

<p>
Role → Permissions → Create • Read • Update • Delete
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const permissions = {

 admin:[

  "create",

  "read",

  "update",

  "delete"

 ],

 user:[

  "read"

 ]

};
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 29 */}

<Card className="mb-3">

<Card.Body>

<h5>
29. Dynamic Roles & Permissions
</h5>

<p>
Load roles and permissions from the database instead of hardcoding them.
</p>

<p>
Database → Role → Permissions → Middleware → Access Decision
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
const role =

await Role.findOne({

 name:req.user.role

});

const allowed =

role.permissions.includes(

 "delete"

);
`}
</SyntaxHighlighter>

</Card.Body>

</Card>





{/* STEP 30 */}

<Card className="mb-3">

<Card.Body>

<h5>
30. RBAC Interview Questions
</h5>

<p>
Frequently asked RBAC interview questions.
</p>

<SyntaxHighlighter
language="javascript"
style={oneDark}
>
{`
Q1. What is RBAC?

A. Role Based Access
Control.


Q2. Why use RBAC?

A. To restrict access
based on user roles.


Q3. Where are roles
stored?

A. Database and JWT.


Q4. Who checks roles?

A. Backend Middleware.
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

export default RBAC;