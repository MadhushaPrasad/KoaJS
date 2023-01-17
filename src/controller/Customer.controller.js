const saveCustomer = async (req, res) => {
  console.log("saveCustomer", req.body);
  try {
    res.status = 200;
    res.body = req.body;
  } catch (e) {
    console.log(e);
  }
};

const updateCustomer = async (req, res) => {
  console.log("updateCustomer");
  try {
    res.status = 200;
    res.body = req.body;
  } catch (e) {
    console.log(e);
  }
};

const deleteCustomer = async (req, res) => {
  console.log("deleteCustomer");
  try {
    res.status = 200;
    res.body = req.body;
  } catch (e) {
    console.log(e);
  }
};

const searchCustomer = async (req, res) => {
  console.log("searchCustomer");
  const customerList = {
    customers: [
      {
        id: 1,
        name: "John",
        age: 25,
      },
      {
        id: 2,
        name: "Peter",
        age: 30,
      },
    ],
  };
  try {
    customerList.customers.forEach((customer) => {
      if (customer.id == req.params.id) {
        res.status = 200;
        res.body = customer;
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const getAllCustomers = async (req, res) => {
  console.log("getAllCustomers");
  try {
    res.status = 200;
    res.body = {
      customers: [
        {
          id: 1,
          name: "John",
          age: 25,
        },
        {
          id: 2,
          name: "Peter",
          age: 30,
        },
      ],
    };
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  saveCustomer,
  updateCustomer,
  deleteCustomer,
  searchCustomer,
  getAllCustomers,
};
