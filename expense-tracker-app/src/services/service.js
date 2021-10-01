const axios = require("axios");

const client = axios.create({
  baseURL: process.env.REACT_APP_base_URL,
});

export async function getData(path) {
  const res = await client
    .get(`${path}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function getLastFive(groupType, path) {
  const res = await client
    .get(`${groupType}/${path}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function getGroupByID(transactionType, groupType, id) {
  const res = await client
    .get(`/${transactionType}/${groupType}/${id}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}

export async function deleteData(path, id) {
  const res = await client
    .delete(`${path}/${id}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
//post
export async function addData(path, data) {
  const res = await client
    .post(`${path}`, data)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}

//put
export async function editData(path, id, data) {
  const res = await client
    .put(`${path}/${id}`, data)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
