// Set Express app
const express = require("express");
const router = express.Router();

// import Department DAO
const EmployeeDao = require("../models/EmployeeDao.js");
const employees = new EmployeeDao();

// import errorHandler
const errorHandler = require("./errorHandler.js");

/**
 * Create a employee with the fields.
 */
router.post("/api/employees", async (req, res) => {
    const { jhed, first_name, last_name, user_role, nationality, ejhed, ajhed } = req.body;

    employees
        .create(jhed, first_name, last_name, user_role, nationality, ejhed, ajhed)
        .then((employee) => res.status(201).json({ data: employee }))
        .catch((err) => errorHandler(res, 400, err));
})

/**
 * Read all employees in DB, or read all employees with the given query params.
 */
router.get("/api/employees", async (req, res) => {
    const { first_name, last_name, user_role, nationality, ejhed, ajhed } = req.query;

    employees
        .read(first_name, last_name, user_role, nationality, ejhed, ajhed)
        .then((employees) => res.json({data: employees}))
        .catch((err) => errorHandler(res, 500, err));
});

/**
 * Read a employee with the given jhed.
 */
router.get("/api/employees/:jhed", (req, res) => {
    const { jhed } = req.params;

    employees
        .readById(jhed)
        .then((employee) =>
            employee
                ? res.json({ data : employee })
                : errorHandler(res, 404, "Resource not found")
        )
        .catch((err) => errorHandler(res, 500, err));
});

/**
 * Update the values of a employee with the given id.
 */
router.patch("/api/employees/:id", (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, user_role, nationality, ejhed, ajhed } = req.body;

    employees
        .update(id, first_name, last_name, user_role, nationality, ejhed, ajhed)
        .then((employee) => res.json({ data : employee }))
        .catch((err) => errorHandler(res, 404, "Resource not found"));
});

/**
 * Delete a employee with the given id.
 */
router.delete("/api/employees/:id", (req, res) => {
    const { id } = req.params;

    employees
        .deleteById(id)
        .then((employee) => res.json({ data : employee }))
        .catch((err) => errorHandler(res, 404, "Resource not found"));
});

module.exports = router;