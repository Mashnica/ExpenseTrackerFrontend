import MyTable from "../componets/MyTable";

const ListPage = () => {
  return (
    <h1>
      <MyTable rows={rows} columns={columns} />
    </h1>
  );
};

export default ListPage;
