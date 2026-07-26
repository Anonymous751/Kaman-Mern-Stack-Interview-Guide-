import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleUser, updateUserPatch } from "../api/userApi";

const EditUserPage = () => {
  const { id } = useParams(); // get user ID from URL
  const navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch user data to pre-fill the form
  const fetchUser = async () => {
  try {
    setLoading(true);

    const res = await getSingleUser(id);     // ✅ using API function
    setUser(res.user);                       // backend sends { user }

  } catch (err) {
    console.error("Error fetching user:", err);
    setError(err.response?.data?.message || "Something went wrong");

  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested address fields
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const res = await updateUserPatch(id, user);  // ✅ using API function

    alert(res.message);                           // backend message
    navigate(-1);                                 // go back

  } catch (err) {
    console.error("Update error:", err);
    alert(err.response?.data?.message || "Failed to update user");

  } finally {
    setLoading(false);
  }
};

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block font-semibold mb-1">First Name</label>
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-semibold mb-1">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-semibold mb-1">Gender</label>
          <select
            name="gender"
            value={user.gender || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-1">Street</label>
          <input
            type="text"
            name="address.street"
            value={user.address?.street || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">City</label>
          <input
            type="text"
            name="address.city"
            value={user.address?.city || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">State</label>
          <input
            type="text"
            name="address.state"
            value={user.address?.state || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Zip</label>
          <input
            type="text"
            name="address.zip"
            value={user.address?.zip || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Country</label>
          <input
            type="text"
            name="address.country"
            value={user.address?.country || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserPage;
