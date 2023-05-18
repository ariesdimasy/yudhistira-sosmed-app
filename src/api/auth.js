import axios from "axios";

export function loginProcess(data) {
  return axios.post(
    process.env.REACT_APP_API_URL + "/auth/login",
    {
      email: data.email,
      password: data.password,
    },
    {
      headers: {},
    }
  );
}

export function registerProcess(data) {
  return axios.post(
    process.env.REACT_APP_API_URL + "/auth/login",
    {
      name: data.name,
      username: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
    },
    {
      headers: {},
    }
  );
}
