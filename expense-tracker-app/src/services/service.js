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
//delete
export async function deleteExpense(id) {
  const res = await client
    .delete(`expenses/${id}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function deleteIncomes(id) {
  const res = await client
    .delete(`incomes/${id}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function deleteExpenseGroup(id) {
  const res = await client
    .delete(`expense-groups/${id}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function deleteIncomeGroup(id) {
  const res = await client
    .delete(`income-groups/${id}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
//post
export async function addExpenseGroup() {
  const res = await client
    .post(`expense-groups`, {
      name: "Group 6",
      description: "Description expense group",
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function addIncomeGroup() {
  const res = await client
    .post(`income-groups`, {
      name: "Group 9",
      description: "Description income group",
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function addIncome() {
  const res = await client
    .post(`incomes`, {
      amount: 34,
      description: "Description 23",
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
export async function addExpense() {
  const res = await client
    .post(`expenses`, {
      amount: 340,
      description: "Description 788",
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
//edit expense
export async function editExpense(id) {
  const res = await client
    .put(`expenses/${id}`, {
      amount: 349,
      description: "Description gg",
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
//edit income
export async function editIncome(id) {
  const res = await client
    .put(`incomes/${id}`, {
      amount: 787,
      description: "Description dd",
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
