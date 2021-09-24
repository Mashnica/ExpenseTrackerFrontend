import MyTable from "../componets/MyTable";

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

  return <MyTable rows={rows} columns={columns} title={"Group List"} />;
};

export default GroupListPage;
