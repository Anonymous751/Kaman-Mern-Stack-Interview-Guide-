
import { Outlet, Link } from "react-router-dom";

const QuickAccessLayout = () => {
  return (
    <div className="container my-4">
      <h2>Quick Access Section</h2>
      
      {/* Optional sub-navigation */}
      <nav className="mb-3">
        <Link to="crud-api" className="me-3">CRUD API</Link>
        <Link to="form-validation" className="me-3">Form Validation</Link>
        <Link to="api-calling" className="me-3">API Calling</Link>
        <Link to="search-filter">Search / Filter</Link>
      </nav>

      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};

export default QuickAccessLayout;
