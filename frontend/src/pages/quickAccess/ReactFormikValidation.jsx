// WHY THIS PAGE?
// This page teaches how to build React forms using Formik + Yup.
// You learn: structure, validation, error-handling, interview concepts.

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// STEPS + WHAT + WHY + WHERE EXPLANATIONS
const steps = [
  {
    title: "1. Install Formik & Yup",
    description:
      "WHAT → Install Formik (form state) + Yup (validation).\nWHY → Reduces boilerplate, gives schema validation.\nWHERE → Run in terminal.",
    code: `npm install formik yup`
  },

  {
    title: "2. Create Basic Form Structure",
    description:
      "WHAT → Set up Formik wrapper + Form + Fields.\nWHY → Formik handles onChange, onSubmit automatically.\nWHERE → Inside your component like RegisterForm.jsx",
    code: `import { Formik, Form, Field } from "formik";

<Formik
  initialValues={{ name: "", email: "", password: "" }}
  onSubmit={(values) => console.log(values)}
>
  <Form>
    <Field name="name" placeholder="Enter name" />
    <Field name="email" placeholder="Enter email" />
    <Field name="password" placeholder="Enter password" />
    <button type="submit">Submit</button>
  </Form>
</Formik>`
  },

  {
    title: "3. Add Yup Validation Schema",
    description:
      "WHAT → Validation rules (required, min length, email).\nWHY → Clean, strong, reusable validation.\nWHERE → Same file or separate file (validation.js).",
    code: `import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 chars").required("Password is required")
});`
  },

  {
    title: "4. Connect Formik + Yup",
    description:
      "WHAT → Add validationSchema to Formik.\nWHY → Formik auto-checks fields using Yup.\nWHERE → Inside <Formik> tag.",
    code: `<Formik
  initialValues={{ name: "", email: "", password: "" }}
  validationSchema={validationSchema}
  onSubmit={(values) => console.log(values)}
>
  {({ errors, touched }) => (
    <Form>
      <Field name="name" />
      {errors.name && touched.name && <p>{errors.name}</p>}

      <Field name="email" />
      {errors.email && touched.email && <p>{errors.email}</p>}

      <Field name="password" type="password" />
      {errors.password && touched.password && <p>{errors.password}</p>}

      <button type="submit">Submit</button>
    </Form>
  )}
</Formik>`
  },

  {
    title: "5. Add UI Styling",
    description:
      "WHAT → Add Bootstrap classes for UI.\nWHY → Better UX; clean, professional visuals.\nWHERE → Inside each field container.",
    code: `<div className="mb-3">
  <label>Name</label>
  <Field name="name" className="form-control" />
  {errors.name && touched.name && (
    <small className="text-danger">{errors.name}</small>
  )}
</div>`
  },

  {
    title: "6. Complete Final Form",
    description:
      "WHAT → Full production-ready form combining Formik + Yup.\nWHY → This is how real forms are built in companies.\nWHERE → Create RegisterForm.jsx file.",
    code: `import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6).required("Password required"),
});

function RegisterForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form className="p-4 card shadow-lg">
          <h3>Register</h3>

          <div className="mb-3">
            <label>Name</label>
            <Field className="form-control" name="name" />
            {errors.name && touched.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>

          <div className="mb-3">
            <label>Email</label>
            <Field className="form-control" name="email" />
            {errors.email && touched.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          <div className="mb-3">
            <label>Password</label>
            <Field type="password" className="form-control" name="password" />
            {errors.password && touched.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;`
  },

  {
    title: "7. Interview Questions",
    description:
      "WHAT → FAQ about Formik & Yup.\nWHY → Interviewers ask these 90% of time.\nWHERE → Use in notes, revision, prep.",
    code: `✔ Why use Formik?
- Handles form state, validation, submission

✔ Why use Yup?
- Clean schema-based validation

✔ Difference: touched vs errors
- touched → user interacted
- errors → validation messages

✔ Validate onBlur instead of onChange?
<Formik validateOnBlur validateOnChange={false} />`
  }
];

const ReactFormikValidation = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">React Form Validation using Formik + Yup</h2>

      <Row>
        {steps.map((step, index) => (
          <Col md={12} className="mb-4" key={index}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4>{step.title}</h4>
                <p>{step.description.replace(/\n/g, "<br/>")}</p>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                  {step.code}
                </SyntaxHighlighter>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReactFormikValidation;
