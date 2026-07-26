import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleUser, deleteUser } from "../api/userApi";

const SingleUserPage = () => {
  const { id } = useParams(); // get user ID from URL
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch single user by ID
  // FETCH USER
const fetchUser = async () => {
  try {
    setLoading(true);

    const res = await getSingleUser(id); // ← using API function
    setUser(res.user);

  } catch (err) {
    console.error("Error fetching user:", err);
    setError(err.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};


  // DELETE USER
const handleDelete = async () => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;

  try {
    await deleteUser(id);  // ← using API function
    alert("User deleted successfully");
    navigate("/projects/users");

  } catch (err) {
    console.error("Error deleting user:", err);
    alert(err.response?.data?.message || "Delete failed");
  }
};

// RUN fetchUser() WHEN id CHANGES
useEffect(() => {
  fetchUser();
}, [id]);

  if (loading) return <p className="p-6">Loading user...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!user) return <p className="p-6">No user found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">User Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="font-semibold">First Name: </span>
          <span>{user.first_name}</span>
        </div>
        <div>
          <span className="font-semibold">Last Name: </span>
          <span>{user.last_name}</span>
        </div>
        <div>
          <span className="font-semibold">Username: </span>
          <span>{user.username}</span>
        </div>
        <div>
          <span className="font-semibold">Email: </span>
          <span>{user.email}</span>
        </div>
        {user.gender && (
          <div>
            <span className="font-semibold">Gender: </span>
            <span>{user.gender}</span>
          </div>
        )}
        {user.address && (
          <div className="col-span-2">
            <span className="font-semibold">Address: </span>
            <div className="ml-2">
              {user.address.street && <div>Street: {user.address.street}</div>}
              {user.address.city && <div>City: {user.address.city}</div>}
              {user.address.state && <div>State: {user.address.state}</div>}
              {user.address.zip && <div>ZIP: {user.address.zip}</div>}
              {user.address.country && <div>Country: {user.address.country}</div>}
            </div>
          </div>
        )}
        <div>
          <span className="font-semibold">Created At: </span>
          <span>{new Date(user.createdAt).toLocaleString()}</span>
        </div>
        <div>
          <span className="font-semibold">Updated At: </span>
          <span>{new Date(user.updatedAt).toLocaleString()}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Back
        </button>

        <button
          onClick={() => navigate(`/projects/users/edit-user/${id}`)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleUserPage;
