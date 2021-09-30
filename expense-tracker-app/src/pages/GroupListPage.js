import * as React from "react";
import MyTable from "../componets/MyTable";
import { useState } from "react";
import Button from "@mui/material/Button";
import styles from "../styles/Navbar.module.css";
import AddGroupExpenseIncomeDialog from "../componets/AddGroupExpenseIncomeDialog";
import { getExpenseGroups, getIncomeGroups } from "../services/service";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const GroupListPage = () => {
  const [open, setOpen] = useState(false);
  const {
    data: expenseGroupsData,
    error: expenseGroupsError,
    isLoading: isLoadingExpenseGroups,
    isError: isErrorExpenseGroups,
  } = useQuery("expenseGroup", getExpenseGroups);
  const {
    data: incomeGroupsData,
    error: incomeGroupsError,
    isLoading: isLoadingIncomeGroups,
    isError: isErrorIncomeGroups,
  } = useQuery("incomeGroup", getIncomeGroups);

  if (isLoadingExpenseGroups || isLoadingIncomeGroups) {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (isErrorExpenseGroups || isErrorIncomeGroups) {
    return (
      <span>
        Error: {expenseGroupsError.message || incomeGroupsError.message}
      </span>
    );
  }

  const columns = [
    { field: "_id", headerName: "No.", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "description", headerName: "Description", width: 130 },
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
        rows={expenseGroupsData}
        columns={columns}
        title={"Expense Groups List"}
      />
      <AddGroupExpenseIncomeDialog
        open={open}
        handleClose={handleClose}
        title={"Add  dialog"}
      />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Add expense group
      </Button>
      <p />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Edit expense group
      </Button>
      <MyTable
        rows={incomeGroupsData}
        columns={columns}
        title={"Income Groups List"}
      />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Add income group
      </Button>
      <p />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Edit income group
      </Button>
    </>
  );
};

export default GroupListPage;
