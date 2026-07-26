import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import FadeScrollWrapper from "../../components/FadeScrollWrapper";

const backendStructure = `
backend/
│── config/
│   └── db.js
│── controllers/
│   └── studentController.js
│── models/
│   └── StudentModel.js
│── routes/
│   └── studentRoutes.js
│── middleware/
│   ├── errorMiddleware.js
│   └── asyncHandler.js
│── utils/
│   └── generateToken.js
│── server.js
│── .env
└── package.json
`;

const frontendStructure = `
frontend/
│── src/
│   ├── api/
│   │   └── axiosInstance.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── StudentForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── StudentsList.jsx
│   │   ├── CreateStudent.jsx
│   │   └── UpdateStudent.jsx
│   ├── services/
│   │   └── studentService.js
│   ├── context/
│   │   └── StudentContext.jsx
│   ├── hooks/
│   │   └── useStudents.js
│   ├── utils/
│   │   └── validators.js
│   ├── App.jsx
|   |-- router.jsx
│   └── main.jsx
└── package.json
`;

function MvcStructure() {
  return (
    <Container className="py-5">
      <FadeScrollWrapper>
      <h1 className="text-center text-4xl font-bold mb-5 text-gray-800">
        MERN MVC Folder Structure (Backend + Frontend)
      </h1>
      </FadeScrollWrapper>

      <Row className="g-4">

        {/* BACKEND */}
        <Col md={6}>
          <Card className="shadow-lg rounded-lg">
            <FadeScrollWrapper>
            <Card.Body>
              <Card.Title className="text-xl font-semibold mb-3 text-gray-700">
                🔴 Backend MVC Structure
              </Card.Title>

              <SyntaxHighlighter language="bash" style={oneDark}>
                {backendStructure}
              </SyntaxHighlighter>

              {/* Explanation */}
              <div className="mt-4">
                <h5 className="fw-bold">📌 Explanation</h5>
                <ul style={{ lineHeight: "1.9" }}>
                  <li><strong>config/db.js</strong> → Connects MongoDB using Mongoose.</li>
                  <li><strong>controllers/</strong> → Handles all logic (CRUD operations).</li>
                  <li><strong>models/Student.js</strong> → Mongoose schema for students.</li>
                  <li><strong>routes/studentRoutes.js</strong> → All API endpoints.</li>
                  <li><strong>middleware/</strong> → Error and async handling middlewares.</li>
                  <li><strong>utils/generateToken.js</strong> → JWT generator for authentication.</li>
                  <li><strong>server.js</strong> → Starts server, connects DB, loads routes.</li>
                  <li><strong>.env</strong> → Stores environment variables (Mongo URI, JWT).</li>
                </ul>
              </div>
            </Card.Body>
            </FadeScrollWrapper>
          </Card>
        </Col>

        {/* FRONTEND */}
        <Col md={6}>
          <Card className="shadow-lg rounded-lg">
            <FadeScrollWrapper>
            <Card.Body>
              <Card.Title className="text-xl font-semibold mb-3 text-gray-700">
                🔵 Frontend MVC Structure
              </Card.Title>

              <SyntaxHighlighter language="bash" style={oneDark}>
                {frontendStructure}
              </SyntaxHighlighter>

              {/* Explanation */}
              <div className="mt-4">
                <h5 className="fw-bold">📌 Explanation</h5>
                <ul style={{ lineHeight: "1.9" }}>
                  <li><strong>api/axiosInstance.js</strong> → Reusable Axios base URL setup.</li>
                  <li><strong>components/</strong> → Navbar + Reusable StudentForm.</li>
                  <li><strong>pages/</strong> → Screens like Home, Create, Update.</li>
                  <li><strong>services/studentService.js</strong> → All API request functions.</li>
                  <li><strong>context/StudentContext.jsx</strong> → Global state management.</li>
                  <li><strong>hooks/useStudents.js</strong> → Custom hook for fetching students.</li>
                  <li><strong>utils/validators.js</strong> → Email, name validation functions.</li>
                  <li><strong>App.jsx</strong> → Import All Components/Pages here.</li>
                   <li><strong>router.jsx</strong> → All Routes defined here.</li>
                  <li><strong>main.jsx</strong> → App entry point + BrowserRouter.</li>
                </ul>
              </div>

            </Card.Body>
            </FadeScrollWrapper>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default MvcStructure;
