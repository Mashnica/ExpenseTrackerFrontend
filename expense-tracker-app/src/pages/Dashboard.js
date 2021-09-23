import MyTable from "../componets/MyTable";

const Dashboard = () => {
  return (
    // return <h1> <MyTable rows={} columns={} /></h1>;
    <h1>
      <MyTable row={rows} columns={columns} />
    </h1>
  );
};

export default Dashboard;
