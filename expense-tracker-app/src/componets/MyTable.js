import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../styles/MyTable.module.css";

export default function MyTable(props) {
  debugger;
  const rows = props.rows.map((row) => ({ ...row, id: row._id }));

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h2 className={styles.h2}>{props.title}</h2>
      {rows && (
        <DataGrid
          rows={rows}
          columns={props.columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      )}
    </div>
  );
}
