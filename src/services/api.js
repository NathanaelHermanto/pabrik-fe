import apiClient from "./apiClient";

const API_URL = process.env.REACT_APP_API_URL;

export const authenticate = async (email, password) => {
  const response = await apiClient.post(`${API_URL}/auth/authenticate`, {email, password});
  const token = response.data.token;
  localStorage.setItem('token', token);
  console.log("login successful");
  return response.data;
}

// export const register = (user) =>
//   axios.post(`${API_URL}/api/v1/auth/register`, user);

export const checkToken = async () => {
  const response = await apiClient.get(`/health/secured`);
  return response.data;
};


export const getPaddies = async (page, size) => {
  const response = await apiClient.get(`/paddy`, {
    params: {page, size},
  });
  return response.data;
};

export const getAvailablePaddy = async (page, size) => {
  const response = await apiClient.get(`/paddy/available`, {
    params: {page, size},
  });
  return response.data;
};

export const getPaddyById = async (id) => {
  const response = await apiClient.get(`/paddy/${id}`);
  return response.data;
};

export const createPaddy = async (quantity, price, supplier) => {
  const response = await apiClient.post('/paddy', {quantity, price, supplier});
  return response.data;
};

export const deletePaddy = async (id) => {
  const response = await apiClient.delete(`/paddy/${id}`);
  return response.data;
};
