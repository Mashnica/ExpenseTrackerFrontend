import * as React from "react";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "../styles/Dialog.module.css";
import AddGroupForm from "./AddGroupForm";
import EditGroupForm from "./EditGroupForm";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={styles.button}
      >
        GROUP Add Form
      </Button>
      <Dialog open={open} onClose={handleClose} className={styles.bob}>
        <DialogTitle>Group List Page</DialogTitle>
        <DialogContent>
          <AddGroupForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
      <p />

      <p />
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={styles.button}
      >
        GROUP Edit Form
      </Button>
      <Dialog open={open} onClose={handleClose} className={styles.bob}>
        <DialogTitle>Group List Page</DialogTitle>
        <DialogContent>
          <EditGroupForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
      <p />
    </div>
  );
}
