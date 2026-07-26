// React hooks for state & lifecycle
import { useState, useEffect } from "react";

// Formik + Yup for form handling & validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Bootstrap UI components
import { Table, Button, Form as BootstrapForm, Row, Col } from "react-bootstrap";

// API functions for CRUD
import {
  createClient,
  deleteClient,
  getClients,
  updateClientPut,
} from "../api/clientApi";

const ClientPage = () => {
  // =========================
  // State Management
  // =========================
  const [clients, setClients] = useState([]); // client list
  const [search, setSearch] = useState(""); // search query
  const [page, setPage] = useState(1); // current page
  const [totalClients, setTotalClients] = useState(0); // total count from API
  const [editingClient, setEditingClient] = useState(null); // client being edited

  const limit = 5; // items per page

  // =========================
  // Fetch Clients (Read)
  // =========================
  const fetchClients = async () => {
    const res = await getClients(page, limit, search);
    setClients(res.clients);
    setTotalClients(res.totalClients);
  };

  // Fetch whenever page or search changes
  useEffect(() => {
    fetchClients();
  }, [page, search]);

  // =========================
  // Delete Client
  // =========================
  const handleDelete = async (id) => {
    await deleteClient(id);
    fetchClients(); // refresh list after delete
  };

  // =========================
  // Yup Validation Schema
  // =========================
  const ClientSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    company: Yup.string().required("Company is required"),
    views: Yup.number()
      .min(0, "Views cannot be negative")
      .required("Views required"),
  });

  // =========================
  // Pagination Calculation
  // =========================
  const totalPages = Math.ceil(totalClients / limit);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Clients</h1>

      {/* =========================
          Search Input
         ========================= */}
      <BootstrapForm.Group className="mb-3 w-50">
        <BootstrapForm.Control
          type="text"
          placeholder="Search clients..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset to first page on search
          }}
        />
      </BootstrapForm.Group>

      {/* =========================
          Client Form (Create / Update)
         ========================= */}
      <Formik
        enableReinitialize // re-fill form when editingClient changes
        initialValues={{
          name: editingClient?.name || "",
          email: editingClient?.email || "",
          company: editingClient?.company || "",
          views: editingClient?.views || 0,
        }}
        validationSchema={ClientSchema}
        onSubmit={async (values, { resetForm }) => {
          if (editingClient) {
            // Update existing client
            await updateClientPut(editingClient.id, values);
            setEditingClient(null);
          } else {
            // Create new client
            await createClient(values);
          }
          resetForm();
          fetchClients(); // refresh table
        }}
      >
        {({ errors, touched }) => (
          <Form className="mb-4 border p-3 rounded">
            <Row className="mb-3">
              {/* Name */}
              <Col md={3}>
                <Field
                  name="name"
                  placeholder="Name"
                  className={`form-control ${
                    errors.name && touched.name ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </Col>

              {/* Email */}
              <Col md={3}>
                <Field
                  name="email"
                  placeholder="Email"
                  className={`form-control ${
                    errors.email && touched.email ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </Col>

              {/* Company */}
              <Col md={3}>
                <Field
                  name="company"
                  placeholder="Company"
                  className={`form-control ${
                    errors.company && touched.company ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="invalid-feedback"
                />
              </Col>

              {/* Views */}
              <Col md={2}>
                <Field
                  name="views"
                  type="number"
                  placeholder="Views"
                  className={`form-control ${
                    errors.views && touched.views ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="views"
                  component="div"
                  className="invalid-feedback"
                />
              </Col>

              {/* Submit Button */}
              <Col md={1}>
                <Button type="submit" className="w-100">
                  {editingClient ? "Update" : "Add"}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>

      {/* =========================
          Client Table (Read)
         ========================= */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Views</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.company}</td>
              <td>{c.views}</td>
              <td>
                {/* Edit fills the form */}
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => setEditingClient(c)}
                >
                  Edit
                </Button>

                {/* Delete client */}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(c.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* =========================
          Pagination
         ========================= */}
      <div className="d-flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={page === i + 1 ? "primary" : "outline-primary"}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ClientPage;
