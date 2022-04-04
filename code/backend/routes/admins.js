// Set Express app
const express = require("express");
const router = express.Router();

// import Admin DAO
const AdminDao = require("../models/AdminDao.js");
const admins = new AdminDao();

// import errorHandler
const errorHandler = require("./errorHandler.js");

/**
 * Create an admin with the given values.
 */
router.post(`/api/admins`, async (req, res) => {
    const { jhed, firstName, lastName } = req.body;

    admins
        .create(jhed, firstName, lastName)
        .then((admin) => res.status(201).json({ data: admin }))
        .catch((err) => errorHandler(res, 400, err));
})

/**
 * Read all admins in DB.
 */
router.get("/api/admins", async (req, res) => {
    admins
        .readAll()
        .then((admins) => res.json({ data: admins }))
        .catch((err) => errorHandler(res, 500, err));
});

/**
 * Read an admin with the given JHED.
 */
router.get("/api/admins/:jhed", (req, res) => {
    const { jhed } = req.params;

    admins
        .readByJhed(jhed)
        .then((admin) =>
            admin
                ? res.json({ data : admin })
                : errorHandler(res, 404, "Resource not found")
        )
        .catch((err) => errorHandler(res, 500, err));
});

/**
 * Update the name of an admin with the given jhed with the given name.
 */
router.patch("/api/admins/:jhed", (req, res) => {
    const { jhed } = req.params;
    const { firstName, lastName } = req.body;

    admins
        .updateNameByJhed(jhed, firstName, lastName)
        .then((admin) => res.json({ data : admin }))
        .catch((err) => errorHandler(res, 404, "Resource not found"));
});

/**
 * Delete an admin with the given jhed.
 */
router.delete("/api/admins/:jhed", (req, res) => {
    const { jhed } = req.params;

    admins
        .deleteByJhed(jhed)
        .then((admin) => res.json({ data : admin }))
        .catch((err) => errorHandler(res, 404, "Resource not found"));
});

module.exports = router;