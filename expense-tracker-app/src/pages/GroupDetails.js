import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getGroupByID } from "../services/service";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import MyTable from "../componets/MyTable";

const GroupDetails = () => {
  var { transactionType, groupType, id } = useParams();

  const {
    data: expensesData,
    error: expensesError,
    isLoading: isLoadingExpenses,
    isError: isErrorExpenses,
  } = useQuery([transactionType, groupType, id], () =>
    getGroupByID(transactionType, groupType, id)
  );

  if (isLoadingExpenses) {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </>
    );
  }
  if (isErrorExpenses) {
    return <span>Error: {expensesError.message}</span>;
  }
  const columns = [
    { field: "_id", headerName: "No.", width: 70 },
    { field: "amount", headerName: "amount", width: 130 },
    { field: "description", headerName: "Description", width: 130 },
  ];
  return (
    <>
      <h1> Incomes/Expenses group details </h1>
      <MyTable
        rows={expensesData}
        columns={columns}
        title={"Expense Groups List"}
      />
    </>
  );
};

export default GroupDetails;
