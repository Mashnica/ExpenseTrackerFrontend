import * as React from "react";
import MyTable from "../componets/MyTable";
import Button from "@mui/material/Button";
import styles from "../styles/Navbar.module.css";
import AddExpenseIncomeDialog from "../componets/AddExpenseIncomeDialog";

const ListPage = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Amount", headerName: "Amount", width: 130 },
    { field: "Description", headerName: "Description", width: 200 },
    { field: "GroupName", headerName: "GroupName", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      Amount: 200,
      Description: "BusinessExpense",
      GroupName: "Group1",
    },
    {
      id: 2,
      Amount: 300,
      Description: "EmergencyPurchase",
      GroupName: "Group3",
    },
    {
      id: 3,
      Amount: 300,
      Description: "EmergencyPurchase",
      GroupName: "Group4",
    },
    {
      id: 4,
      Amount: 300,
      Description: "Lunch",
      GroupName: "Group1",
    },
    {
      id: 5,
      Amount: 500,
      Description: "Lunch",
      GroupName: "Group2",
    },
  ];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MyTable rows={rows} columns={columns} title={"List page"} />
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

      <MyTable rows={rows} columns={columns} title={"List page"} />
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
