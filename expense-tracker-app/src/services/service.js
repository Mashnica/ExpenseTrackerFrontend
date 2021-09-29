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
export async function getLastFiveExpense() {
  const res = await client
    .get("/last-fiveExpense")
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
    .get("/last-fiveIncomes")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return res.data;
}
// //POST
// export default function addExpenseGroup(){
// return client
//   .post("/expense-groups", {
//     name: "Group1",
//     description: "",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
// export default function addIncomeGroup(){
// return client
//   .post("/income-groups", {
//     name: "Group1",
//     description: "",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
// export default function addExpenses(){
//   return client
//   .post("/expenses", {
//     amount: 34,
//     description: "Description2",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
// export default function addIncomes(){
//  return client
//   .post("/incomes", {
//     amount: 349,
//     description: "Description233",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
