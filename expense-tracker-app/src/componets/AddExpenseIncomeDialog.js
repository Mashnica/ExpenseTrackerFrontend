import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const validationSchema = yup.object({
  amount: yup
    .number("Enter amount")
    .min(0, "Amount should be  minimum 0")
    .required("Amount is required"),
  description: yup
    .string("Enter description")
    .required("Description is required"),
  group: yup.string("Enter group").required("Group is required"),
});

const AddExpenseIncomesDIalog = (props) => {
  const formik = useFormik({
    initialValues: {
      amount: "",
      description: "",
      group: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClose = () => {
    props.handleClose(false);
  };

  const groups = ["expense", "income "];

  return (
    <>
      <Dialog open={props.open}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="amount"
              name="amount"
              label="Amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText={formik.touched.amount && formik.errors.amount}
            />
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              type="description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />

            <select name="group" onChange={formik.handleChange}>
              <option value="" label="Select a group" />
              <option
                value={groups.map((group) => (
                  <h2>{group}</h2>
                ))}
                label="expense"
              />
              <option
                value={groups.map((group) => (
                  <h2>{group}</h2>
                ))}
                label="income"
              />
            </select>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddExpenseIncomesDIalog;
