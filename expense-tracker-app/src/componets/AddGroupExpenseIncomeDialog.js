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
  name: yup.string("Enter name of group").required("Name is required"),
  description: yup
    .string("Enter description for group")
    .required("Description is required"),
});

const AddGroupExpenseIncomeDialog = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleClose = () => {
    props.handleClose(false);
  };
  return (
    <>
      <Dialog open={props.open}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
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

export default AddGroupExpenseIncomeDialog;
