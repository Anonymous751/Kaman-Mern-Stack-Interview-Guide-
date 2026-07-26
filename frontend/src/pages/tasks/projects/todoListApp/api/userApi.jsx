import axiosInstance from "./AxiosInterceptor";

// ------------------------------
// GET ALL USERS (With Pagination)
// backend returns:
// { success, totalUsers, totalPages, currentPage, perPage, data: users }
// ------------------------------
export const getUsers = async (page = 1, limit = 5) => {
  const res = await axiosInstance.get(
    `/todo-list/api/users?page=${page}&limit=${limit}`
  );

  return {
    users: res.data.data,          // 🔥 BACKEND sends data: users
    totalPages: res.data.totalPages,
    totalUsers: res.data.totalUsers,
    currentPage: res.data.currentPage,
  };
};

// ------------------------------
// GET SINGLE USER
// backend returns:
// { success, data: user }
// ------------------------------
export const getSingleUser = async (id) => {
  const res = await axiosInstance.get(`/todo-list/api/users/${id}`);

  return {
    user: res.data.data,           // 🔥 data: user
  };
};

// ------------------------------
// CREATE USER
// backend returns:
// { success, message, data: user }
// ------------------------------
export const createUser = async (data) => {
  const res = await axiosInstance.post(`/todo-list/api/users`, data);

  return {
    message: res.data.message,
    user: res.data.data,          // 🔥 data: user
  };
};

// ------------------------------
// DELETE USER
// backend returns:
// { success, message }
// ------------------------------
export const deleteUser = async (id) => {
  const res = await axiosInstance.delete(`/todo-list/api/users/${id}`);

  return {
    message: res.data.message,
  };
};

// ------------------------------
// PUT UPDATE USER (Full update)
// backend returns:
// { success, message, data: updatedUser }
// ------------------------------
export const updateUserPut = async (id, data) => {
  const res = await axiosInstance.put(`/todo-list/api/users/${id}`, data);

  return {
    message: res.data.message,
    user: res.data.data,           // 🔥 data: updatedUser
  };
};

// ------------------------------
// PATCH UPDATE USER (Partial update)
// backend returns:
// { success, message, data: updatedUser }
// ------------------------------
export const updateUserPatch = async (id, data) => {
  const res = await axiosInstance.patch(`/todo-list/api/users/${id}`, data);

  return {
    message: res.data.message,
    user: res.data.data,           // 🔥 data: updatedUser
  };
};
