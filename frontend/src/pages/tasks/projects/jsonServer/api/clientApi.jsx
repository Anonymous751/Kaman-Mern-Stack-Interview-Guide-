import axiosInstance from "./AxiosInterceptor";


export const getClients = async (page = 1, limit = 5, search = "") => {
  const res = await axiosInstance.get(
    `/clients?_page=${page}&_limit=${limit}&q=${search}`
  );

  return {
    clients: res.data,
    totalClients: Number(res.headers["x-total-count"]),
  };
};

export const createClient = async (data) => {
  const res = await axiosInstance.post("/clients", data);
  return res.data;
};

export const deleteClient = async (id) => {
  await axiosInstance.delete(`/clients/${id}`);
};

export const updateClientPut = async (id, data) => {
  const res = await axiosInstance.put(`/clients/${id}`, data);
  return res.data;
};
