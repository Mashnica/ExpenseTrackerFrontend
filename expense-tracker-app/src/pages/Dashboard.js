import * as React from "react";
import MyTable from "../componets/MyTable";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import AddExpenseIncomeDialog from "../componets/AddExpenseIncomeDialog";
import Button from "@mui/material/Button";
import { useQuery } from "react-query";
import { getLastFiveExpenses, getLastFiveIncomes } from "../services/service";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const {
    data: expensesLastFiveData,
    error: expensesLastFiveError,
    isLoading: isLoadingExpensesLastFive,
    isError: isErrorExpensesLastFive,
  } = useQuery("lastFiveExpenses", getLastFiveExpenses);

  const {
    data: incomesLastFiveData,
    error: incomesLastFiveError,
    isLoading: isLoadingIncomesLastFive,
    isError: isErrorIncomesLastFive,
  } = useQuery("lastFiveIncomes", getLastFiveIncomes);
  if (isLoadingExpensesLastFive || isLoadingIncomesLastFive) {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (isErrorExpensesLastFive || isErrorIncomesLastFive) {
    return (
      <span>
        Error: {expensesLastFiveError.message || incomesLastFiveError.message}
      </span>
    );
  }

  const columnsExpense = [
    { field: "_id", headerName: "No.", width: 70 },
    { field: "amount", headerName: "Amount", width: 130 },
    { field: "dateCreated", headerName: "Creation time", width: 200 },
    { field: "dateUpdated", headerName: "Updated time", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "expenseGroup", headerName: "Group name", width: 200 },
  ];
  const columnsIncome = [
    { field: "_id", headerName: "No.", width: 70 },
    { field: "amount", headerName: "Amount", width: 130 },
    { field: "dateCreated", headerName: "Creation time", width: 200 },
    { field: "dateUpdated", headerName: "Updated time", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "incomeGroup", headerName: "Group name", width: 200 },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <h2>Total amount: </h2>

      <AddExpenseIncomeDialog
        open={open}
        handleClose={handleClose}
        title={"Add dialog"}
      />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Add expense
      </Button>
      <p />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Add income
      </Button>
      <MyTable
        rows={expensesLastFiveData}
        columns={columnsExpense}
        title={"Last five expenses"}
        className={styles.margin}
      />

      <MyTable
        rows={incomesLastFiveData}
        columns={columnsIncome}
        title={"Last five incomes"}
        className={styles.margin}
      />
    </>
  );
};

export default Dashboard;
