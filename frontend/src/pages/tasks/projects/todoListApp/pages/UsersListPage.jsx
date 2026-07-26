import { useEffect, useState } from "react";
import {getUsers, deleteUser} from "../api/userApi"
import { useNavigate } from "react-router-dom";

const UsersListPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch Users
 const fetchUsers = async () => {
  try {
    setLoading(true);

    const { users, totalPages } = await getUsers(page, limit);

    setUsers(users);
    setTotalPages(totalPages);
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    setLoading(false);
  }
};

  // Delete User
 const handleDelete = async (id) => {
  if (!window.confirm("Are you sure?")) return;

  try {
    await deleteUser(id);
    await fetchUsers();   // refresh list
    alert("User deleted successfully!");
  } catch (error) {
    console.error("Delete error:", error);
  }
};

  useEffect(() => {
    fetchUsers();
  }, [page, limit]);

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Users List</h2>

        <button
          onClick={() => navigate("/projects/user-form-page")}
          className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
        >
          + Create User
        </button>
      </div>

      {/* Limit Dropdown */}
      <div className="mb-4 flex items-center gap-2">
        <label className="font-semibold">Show per page:</label>
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="border rounded-md p-2"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>


      {/* ------------------------------ */}
      {/* Desktop Table (Hidden on Mobile) */}
      {/* ------------------------------ */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b text-left">Name</th>
              <th className="p-3 border-b text-left">Email</th>
              <th className="p-3 border-b text-left">Gender</th>
              <th className="p-3 border-b text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center p-5">
                  Loading users...
                </td>
              </tr>
            ) : users?.length ? (
              users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition">
                  <td className="p-3 border-b">
                    {user.first_name} {user.last_name}
                  </td>
                  <td className="p-3 border-b">{user.email}</td>
                  <td className="p-3 border-b">{user.gender}</td>
                  <td className="p-3 border-b">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          navigate(`/projects/users/single-user/${user._id}`)
                        }
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          navigate(`/projects/users/edit-user/${user._id}`)
                        }
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-5">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


      {/* ------------------------------ */}
      {/* Mobile Cards (Hidden on Desktop) */}
      {/* ------------------------------ */}
      <div className="grid md:hidden gap-4">
        {users?.map((user) => (
          <div
            key={user._id}
            className="p-4 border rounded-lg shadow bg-white"
          >
            <h3 className="font-bold text-lg">
              {user.first_name} {user.last_name}
            </h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600 capitalize">{user.gender}</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={() =>
                  navigate(`/projects/users/single-user/${user._id}`)
                }
                className="bg-blue-500 text-white px-3 py-1 rounded w-full sm:w-auto"
              >
                View
              </button>

              <button
                onClick={() =>
                  navigate(`/projects/users/edit-user/${user._id}`)
                }
                className="bg-yellow-500 text-white px-3 py-1 rounded w-full sm:w-auto"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(user._id)}
                className="bg-red-500 text-white px-3 py-1 rounded w-full sm:w-auto"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-5 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
        >
          ◀ Prev
        </button>

        <span className="text-lg font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-5 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default UsersListPage;
