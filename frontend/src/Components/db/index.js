import React from "react";
import axios from "axios";

async function getUsers(MCQ) {
  return await axios({
    method: "get", //you can set what request you want to be
    url: process.env.REACT_APP_BASE_URL + "/api/user",
  })
}

async function getMCQbyid(id) {
  return await axios({
    method: "get", //you can set what request you want to be
    url: process.env.REACT_APP_BASE_URL + "/api/quiz/" + id,
  });
}

async function addMCQ(MCQ) {
  return await axios({
    method: "post", //you can set what request you want to be
    url: process.env.REACT_APP_BASE_URL + "/api/quiz",
    data: MCQ,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
async function updateMCQ(id, MCQ) {
  return await axios({
    method: "patch", //you can set what request you want to be
    url: process.env.REACT_APP_BASE_URL + "/api/quiz/" + id,
    data: MCQ,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function getMCQ() {
  return await axios({
    method: "get",
    url: process.env.REACT_APP_BASE_URL + "/api/quiz",
  });
}
async function deleteMCQ(id) {
  return await axios({
    method: "delete",
    url: process.env.REACT_APP_BASE_URL + "/api/quiz/" + id,
  });
}

async function addUser(user) {
   return await axios({
        method: "post", //you can set what request you want to be
        url: process.env.REACT_APP_BASE_URL + "/api/user",
        data: user,
        headers: {
          "Content-Type": "application/json",
        },
      })
  }

export default { getMCQ, addMCQ, getMCQbyid, updateMCQ, deleteMCQ, getUsers, addUser};
