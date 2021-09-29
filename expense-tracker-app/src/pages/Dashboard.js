import * as React from "react";
import MyTable from "../componets/MyTable";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import AddExpenseIncomeDialog from "../componets/AddExpenseIncomeDialog";
import Button from "@mui/material/Button";
import { useQuery } from "react-query";
import { getExpenses, getIncomes } from "../services/service";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const {
    data: expensesLastFiveData,
    error: expensesLastFiveError,
    isLoading: isLoadingExpensesLastFive,
    isError: isErrorExpensesLastFive,
  } = useQuery("lastFiveExpenses", getExpenses);

  const {
    data: incomesLastFiveData,
    error: incomesLastFiveError,
    isLoading: isLoadingIncomesLastFive,
    isError: isErrorIncomesLastFive,
  } = useQuery("lastFiveIncomes", getIncomes);
  if (isLoadingExpensesLastFive) {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (isErrorExpensesLastFive) {
    return <span>Error: {expensesLastFiveError.message}</span>;
  }
  if (isLoadingIncomesLastFive) {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (isErrorIncomesLastFive) {
    return <span>Error: {incomesLastFiveError.message}</span>;
  }
  const columns = [
    { field: "_id", headerName: "_id", width: 70 },
    { field: "amount", headerName: "amount", width: 130 },
    { field: "dateCreated", headerName: "dateCreated", width: 200 },
    { field: "dateUpdated", headerName: "dateUpdated", width: 200 },
    { field: "description", headerName: "description", width: 200 },
    { field: "expenseGroup", headerName: "expenseGroup", width: 200 },
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
        columns={columns}
        title={"Last five expenses"}
        className={styles.margin}
      />

      <MyTable
        rows={incomesLastFiveData}
        columns={columns}
        title={"Last five incomes"}
        className={styles.margin}
      />
    </>
  );
};

export default Dashboard;
