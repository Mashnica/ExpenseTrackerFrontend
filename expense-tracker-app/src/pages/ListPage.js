import * as React from "react";
import MyTable from "../componets/MyTable";
import Button from "@mui/material/Button";
import styles from "../styles/Navbar.module.css";
import AddExpenseIncomeDialog from "../componets/AddExpenseIncomeDialog";
import { useQuery } from "react-query";
import { useState } from "react";
import { getExpenses, getIncomes } from "../services/service";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const ListPage = () => {
  const [open, setOpen] = useState(false);
  const {
    data: expensesData,
    error: expensesError,
    isLoading: isLoadingExpenses,
    isError: isErrorExpenses,
  } = useQuery("expenses", getExpenses);
  const {
    data: incomesData,
    error: incomesError,
    isLoading: isLoadingIncomes,
    isError: isErrorIncomes,
  } = useQuery("incomes", getIncomes);

  if (isLoadingExpenses || isLoadingIncomes) {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (isErrorExpenses || isErrorIncomes) {
    return <span>Error: {expensesError.message || incomesError.message}</span>;
  }

  const columns = [
    { field: "_id", headerName: "No", width: 70 },
    { field: "amount", headerName: "Amount", width: 130 },
    { field: "dateCreated", headerName: "Creation time", width: 200 },
    { field: "dateUpdated", headerName: "Updated time", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "expenseGroup", headerName: "Group name", width: 200 },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MyTable
        rows={expensesData}
        columns={columns}
        title={"Expenses list page"}
      />
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
        Edit expense
      </Button>

      <MyTable
        rows={incomesData}
        columns={columns}
        title={"Incomes list page "}
      />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Add income
      </Button>
      <p />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Edit income
      </Button>
    </>
  );
};

export default ListPage;
