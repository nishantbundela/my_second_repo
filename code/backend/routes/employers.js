// Set Express app
const express = require("express");
const router = express.Router();

// import Employer DAO
const EmployerDao = require("../models/EmployerDao.js");
const employers = new EmployerDao();

// import errorHandler
const errorHandler = require("./errorHandler.js");

/**
 * Create a employer with the fields.
 */
router.post("/api/employers", async (req, res) => {
    const { ejhed, first_name, last_name } = req.body;

    employers
        .create(ejhed, first_name, last_name)
        .then((employer) => res.status(201).json({ data: employer }))
        .catch((err) => errorHandler(res, 400, err));
})

/**
 * Read all employers in DB, or read all employers with the given query params.
 */
router.get("/api/employers", async (req, res) => {
    const { first_name, last_name } = req.query;

    employers
        .read(first_name, last_name)
        .then((employers) => res.json({data: employers}))
        .catch((err) => errorHandler(res, 500, err));
});

/**
 * Read a employer with the given jhed.
 */
router.get("/api/employers/:jhed", (req, res) => {
    const { jhed } = req.params;

    employers
        .readById(jhed)
        .then((employer) =>
            employer
                ? res.json({ data : employer })
                : errorHandler(res, 404, "Resource not found")
        )
        .catch((err) => errorHandler(res, 500, err));
});

/**
 * Update the values of a employer with the given jhed.
 */
router.patch("/api/employers/:jhed", (req, res) => {
    const { jhed } = req.params;
    const { first_name, last_name } = req.body;

    employers
        .update(jhed, first_name, last_name)
        .then((employer) => res.json({ data : employer }))
        .catch((err) => errorHandler(res, 404, "Resource not found"));
});

/**
 * Delete a employee with the given jhed.
 */
router.delete("/api/employers/:jhed", (req, res) => {
    const { jhed } = req.params;

    employers
        .deleteById(jhed)
        .then((employer) => res.json({ data : employer }))
        .catch((err) => errorHandler(res, 404, "Resource not found"));
});

module.exports = router;