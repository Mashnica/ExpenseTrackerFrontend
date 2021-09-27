import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Dialog } from "@material-ui/core";

const validationSchema = yup.object({
  amount: yup
    .number("Enter amount")
    .min(0, "Amount should be  minimum 0")
    .required("Amount is required"),
  description: yup
    .string("Enter description")
    .required("Description is required"),
});

const EditForm = () => {
  const formik = useFormik({
    initialValues: {
      amount: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const groups = ["expense", "income "];
  return (
    <div>
      <Dialog>
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
            helperText={formik.touched.description && formik.errors.description}
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
      </Dialog>
    </div>
  );
};

export default EditForm;
