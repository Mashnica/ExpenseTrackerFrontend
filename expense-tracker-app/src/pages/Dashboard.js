import MyTable from "../componets/MyTable";

const Dashboard = () => {
  const rows = [];
  const columns = [];
  return (
    // return <h1> <MyTable rows={} columns={} /></h1>;

    <MyTable rows={rows} columns={columns} />
  );
};

export default Dashboard;
