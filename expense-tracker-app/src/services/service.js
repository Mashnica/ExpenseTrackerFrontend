const axios = require("axios");

const client = axios.create({
  baseURL: "http://localhost:5000",
});

export async function getExpenseGroups() {
  const res = await client
    .get("/expense-groups")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function getIncomeGroups() {
  const res = await client
    .get("/income-groups")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function getExpenses() {
  const res = await client
    .get("/expenses")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function getIncomes() {
  const res = await client
    .get("/incomes")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function getLastFiveExpenses() {
  const res = await client
    .get("/expenses/last-five")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function getLastFiveIncomes() {
  const res = await client
    .get("/incomes/last-five")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
