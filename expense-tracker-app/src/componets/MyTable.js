import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../styles/MyTable.module.css";
import Dialog from "./Dialog";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TextField from "@material-ui/core/TextField";

export default function MyTable(props) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <BookmarkBorderIcon /> <p> total amount:</p> <TextField />
      <h2 className={styles.h2}>{props.title}</h2>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <Dialog />
      <h2 className={styles.h2}>{props.title}</h2>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <Dialog />
    </div>
  );
}
