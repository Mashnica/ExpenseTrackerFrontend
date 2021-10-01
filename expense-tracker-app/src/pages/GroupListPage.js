import * as React from "react";
import MyTable from "../componets/MyTable";
import { useState } from "react";
import Button from "@mui/material/Button";
import styles from "../styles/Navbar.module.css";
import AddGroupExpenseIncomeDialog from "../componets/AddGroupExpenseIncomeDialog";
import { getData } from "../services/service";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import EditIcon from "@material-ui/icons/Edit";
import { blue } from "@material-ui/core/colors";
import { FormControlLabel, IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useHistory } from "react-router-dom";

const GroupListPage = () => {
  const [open, setOpen] = useState(false);
  const pathExpense = "expense-groups";
  const pathIncome = "income-groups";

  const history = useHistory();
  const {
    data: expenseGroupsData,
    error: expenseGroupsError,
    isLoading: isLoadingExpenseGroups,
    isError: isErrorExpenseGroups,
  } = useQuery(["expense-groups", pathExpense], () => getData(pathExpense));
  const {
    data: incomeGroupsData,
    error: incomeGroupsError,
    isLoading: isLoadingIncomeGroups,
    isError: isErrorIncomeGroups,
  } = useQuery(["income-groups", pathIncome], () => getData(pathIncome));

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

  const IconsButtons = (props) => {
    const handleEditClick = () => {
      // some action
      setOpen(true);
    };

    return (
      <>
        <FormControlLabel
          control={
            <IconButton
              color="secondary"
              aria-label="edit"
              onClick={handleEditClick}
            >
              <EditIcon style={{ color: blue[500] }} />
            </IconButton>
          }
        />
        <FormControlLabel
          control={
            <IconButton
              color="secondary"
              aria-label="delete"
              // onClick={handleEditClick}
            >
              <DeleteIcon style={{ color: blue[500] }} />
            </IconButton>
          }
        />
        <FormControlLabel
          control={
            <IconButton
              color="secondary"
              aria-label="group details"
              variant="btn btn-success"
              onClick={() =>
                history.push(
                  `/details/${props.transactionType}/${props.groupType}/${props.id}`
                )
              }
            >
              <ManageSearchIcon style={{ color: blue[500] }} />
            </IconButton>
          }
        />
      </>
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const prepairColumns = (transactionType, groupType) => {
    return [
      { field: "_id", headerName: "No.", width: 70 },
      { field: "name", headerName: "Name", width: 130 },
      { field: "description", headerName: "Description", width: 130 },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        width: 140,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          return (
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
            >
              <IconsButtons
                id={params.row.id}
                groupType={groupType}
                transactionType={transactionType}
              />
            </div>
          );
        },
      },
    ];
  };
  return (
    <>
      <MyTable
        rows={expenseGroupsData}
        columns={prepairColumns("expenses", "expensegroup")}
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
      {/* <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Edit expense group
      </Button> */}
      <MyTable
        rows={incomeGroupsData}
        columns={prepairColumns("incomes", "incomegroup")}
        title={"Income Groups List"}
      />
      {/* <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Add income group
      </Button> */}
      <p />
      {/* <Button
        variant="contained"
        onClick={handleClickOpen}
        className={styles.button}
      >
        Edit income group
      </Button> */}
    </>
  );
};

export default GroupListPage;
