import MyTable from "../componets/MyTable";

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
  return <MyTable rows={rows} columns={columns} title={"List page"} />;
};

export default ListPage;
