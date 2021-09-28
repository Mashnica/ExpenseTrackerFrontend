import * as React from "react";
import MyTable from "../componets/MyTable";
import Button from "@mui/material/Button";
import styles from "../styles/Navbar.module.css";
import AddGroupExpenseIncomeDialog from "../componets/AddGroupExpenseIncomeDialog";

const GroupListPage = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "Name", width: 130 },
    { field: "Description", headerName: "Description", width: 130 },
  ];
  const rows = [
    {
      id: 1,
      Name: "Group1",
      Description:
        "A cost incurred necessary to conduct thecompletion of official State business.",
    },
    {
      id: 2,
      Name: "Group2",
      Description:
        "A cost incurred necessary to conduct thecompletion of official State business.",
    },
    {
      id: 3,
      Name: "Group3",
      Description:
        "A cost incurred necessary to conduct thecompletion of official State business.",
    },
    {
      id: 3,
      Name: "Group4",
      Description:
        "A cost incurred necessary to conduct thecompletion of official State business.",
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
      <MyTable rows={rows} columns={columns} title={"Expense Groups List"} />
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
      <MyTable rows={rows} columns={columns} title={"Income Groups List"} />
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
