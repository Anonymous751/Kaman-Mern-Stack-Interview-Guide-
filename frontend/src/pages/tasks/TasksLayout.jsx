
import { Outlet, Link } from "react-router-dom";

const TasksLayout = () => {
  return (
    <div className="container my-4">
      <h2>Tasks Section</h2>
      
      {/* Optional sub-navigation */}
      <nav className="mb-3">
        <Link to="task-page" className="me-3">Tasks Page</Link>
        <Link to="task-list-page">Project List</Link>
      </nav>

      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};

export default TasksLayout;
