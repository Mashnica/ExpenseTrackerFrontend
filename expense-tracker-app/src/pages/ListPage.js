import MyTable from "../componets/MyTable";

const ListPage = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "Name", width: 130 },
    { field: "Description", headerName: "Description", width: 130 },
  ];

  const rows = [
    {
      id: 1,
      Name: "BusinessExpense",
      Description:
        "A cost incurred necessary to conduct thecompletion of official State business.",
    },
    {
      id: 2,
      Name: "EmergencyPurchase",
      Description:
        "Business expense incurred from an emergency purchase necessary to conduct the completionof official State business",
    },
    {
      id: 3,
      Name: "Licenses",
      Description:
        "The cost incurred with the purchase of a licensethat is necessary",
    },
    {
      id: 4,
      Name: "Lunch",
      Description:
        "The cost incurred with the purchase of a licensethat is necessary",
    },
    {
      id: 4,
      Name: "Travel Expense",
      Description:
        "The cost incurred with the purchase of a licensethat is necessary",
    },
    {
      id: 5,
      Name: "Licenses",
      Description:
        "The cost incurred with the purchase of a licensethat is necessary",
    },
    {
      id: 6,
      Name: "Licenses",
      Description:
        "The cost incurred with the purchase of a licensethat is necessary",
    },
    {
      id: 7,
      Name: "Overtime MealTicket",
      Description:
        "The cost incurred with the purchase of a licensethat is necessary",
    },
    {
      id: 8,
      Name: "Overtime MealTicket33",
      Description:
        "The cost incurred with the purchase of a licensethat is necessary",
    },
    {
      id: 9,
      Name: " MealTicket",
      Description:
        "The cost incurred with the purchase of a licensethat is necessary",
    },
  ];
  return <MyTable rows={rows} columns={columns} />;
};

export default ListPage;
