import axios from "axios";

const userLogin = localStorage.getItem("userLogin") ? JSON.parse(localStorage?.getItem("userLogin")) : {}

export function loginProcess(data) {
  return axios.post(
    process.env.REACT_APP_API_URL + "/auth/login",
    {
      email: data.email,
      password: data.password,
    },
    {
      headers: {

      },
    }
  );
}

export function registerProcess(data) {
  return axios.post(
    process.env.REACT_APP_API_URL + "/auth/register",
    {
      name: data.name,
      username: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      password_confirm: data.password_confirm
    },
    {
      headers: {},
    }
  );
}

export function checkToken() { 
  return axios.get("check-token", {
    headers: {
      authorization:'Bearer '+userLogin?.token
    }
  })
}

export function requestForgotPassword(email) { 
  return axios.post(process.env.REACT_APP_API_URL + "/auth/request/forgot-password",{
    email:email
  })
}

export function forgotPassword(data) { 
  return axios.post(process.env.REACT_APP_API_URL + "/auth/forgot-password",{
    email:data.email,
    password: data.password,
    passwordConfirm : data.passwordConfirm
  })
}
