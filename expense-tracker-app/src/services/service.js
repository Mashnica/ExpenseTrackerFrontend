const axios = require("axios");

const client = axios.create({
  baseURL: "http://localhost:5000",
});

export default function getExpenseGroups() {
  return client
    .get("/expense-groups")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}
export default function getIncomeGroups(){
 return client 
  .get("/income-groups")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});
}
export default function getExpenses(){
return client
  .get("/expenses")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});
}
export default function getIncomes(){
return client
  .get("/incomes")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});
}
export default function getLastFiveExpense(){
 return client
  .get("/last-fiveExpense")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});
}
export default function getLastFiveIncomes(){
return client
  .get("/last-fiveIncomes")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});
}
//POST
export default function addExpenseGroup(){
return client
  .post("/expense-groups", {
    name: "Group1",
    description: "",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
export default function addIncomeGroup(){
return client
  .post("/income-groups", {
    name: "Group1",
    description: "",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
export default function addExpenses(){
  return client
  .post("/expenses", {
    amount: 34,
    description: "Description2",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
export default function addIncomes(){
 return client 
  .post("/incomes", {
    amount: 349,
    description: "Description233",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
