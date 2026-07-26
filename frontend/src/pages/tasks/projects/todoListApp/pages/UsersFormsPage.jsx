import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
    const navigate = useNavigate()
  const initialValues = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    gender: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password required"),
    gender: Yup.string().required("Select gender"),
    address: Yup.object({
      street: Yup.string(),
      city: Yup.string().required("City required"),
      state: Yup.string().required("State required"),
      zip: Yup.string().required("Zip required"),
      country: Yup.string().required("Country required"),
    }),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await createUser(values);
      alert("User created!");
      resetForm();
      navigate("/projects/user-list-page");
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Something went wrong"));
    }
  };
  return (
    <div className="container py-4">
      <h2>User Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="row g-3 mt-3">

          {/* FIRST NAME */}
          <div className="col-md-6">
            <label>First Name</label>
            <Field name="first_name" className="form-control" />
            <ErrorMessage name="first_name" className="text-danger" component="small" />
          </div>

          {/* LAST NAME */}
          <div className="col-md-6">
            <label>Last Name</label>
            <Field name="last_name" className="form-control" />
            <ErrorMessage name="last_name" className="text-danger" component="small" />
          </div>

          {/* USERNAME */}
          <div className="col-md-6">
            <label>Username</label>
            <Field name="username" className="form-control" />
            <ErrorMessage name="username" className="text-danger" component="small" />
          </div>

          {/* EMAIL */}
          <div className="col-md-6">
            <label>Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" className="text-danger" component="small" />
          </div>

          {/* PASSWORD */}
          <div className="col-md-6">
            <label>Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" className="text-danger" component="small" />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="col-md-6">
            <label>Confirm Password</label>
            <Field name="confirm_password" type="password" className="form-control" />
            <ErrorMessage name="confirm_password" className="text-danger" component="small" />
          </div>

          {/* GENDER */}
          <div className="col-12">
            <label>Gender</label>
            <div className="d-flex gap-3 mt-2">
              <label>
                <Field type="radio" name="gender" value="male" /> Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" /> Female
              </label>
              <label>
                <Field type="radio" name="gender" value="other" /> Other
              </label>
            </div>
            <ErrorMessage name="gender" className="text-danger" component="small" />
          </div>

          {/* ADDRESS FIELDS */}
          <h4 className="mt-4">Address</h4>

          <div className="col-md-6">
            <label>Street</label>
            <Field name="address.street" className="form-control" />
          </div>

          <div className="col-md-6">
            <label>City</label>
            <Field name="address.city" className="form-control" />
            <ErrorMessage name="address.city" className="text-danger" component="small" />
          </div>

          <div className="col-md-4">
            <label>State</label>
            <Field name="address.state" className="form-control" />
            <ErrorMessage name="address.state" className="text-danger" component="small" />
          </div>

          <div className="col-md-4">
            <label>Zip</label>
            <Field name="address.zip" className="form-control" />
            <ErrorMessage name="address.zip" className="text-danger" component="small" />
          </div>

          <div className="col-md-4">
            <label>Country</label>
            <Field name="address.country" className="form-control" />
            <ErrorMessage name="address.country" className="text-danger" component="small" />
          </div>

          {/* SUBMIT */}
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>

        </Form>
      </Formik>
    </div>
  );
}
