const saveCustomer = async (req, res) => {
    console.log("saveCustomer");
    try {
        res.status(201).send("Customer saved successfully");
    } catch (e) {
        console.log(e);
    }
}

const updateCustomer = async (req, res) => {
    console.log("updateCustomer");
    try {
        res.status(201).send("Customer updated successfully");
    } catch (e) {
        console.log(e);
    }
}

const deleteCustomer = async (req, res) => {
    console.log("deleteCustomer");
    try {
        res.status(201).send("Customer deleted successfully");
    } catch (e) {
        console.log(e);
    }
}

const searchCustomer = async (req, res) => {
    console.log("searchCustomer");
    try {
        res.status(201).send("Customer searched successfully and ID is " + req.body.id);
    } catch (e) {
        console.log(e);
    }
}

const getAllCustomers = async (req, res) => {
    console.log("getAllCustomers");
    try {
        res.status(201).send("All customers");
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    saveCustomer,
    updateCustomer,
    deleteCustomer,
    searchCustomer,
    getAllCustomers
}