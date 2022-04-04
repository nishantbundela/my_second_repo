// Set Express app
const express = require("express");
const router = express.Router();

// import Department DAO
const JobDao = require("../models/JobDao.js");
const jobs = new JobDao();

// import errorHandler
const errorHandler = require("./errorHandler.js");

/**
 * Create a job with the fields.
 */
router.post(`/api/jobs`, async (req, res) => {
    const { job_id, role_title, jhed, ejhed,
            ajhed, wage, hour_limit, department_title,
            job_active, grant_id } = req.body;

    jobs
        .create(job_id, role_title, jhed, ejhed,
            ajhed, wage, hour_limit, department_title,
            job_active, grant_id)
        .then((job) => res.status(201).json({ data: job }))
        .catch((err) => errorHandler(res, 400, err));
})

/**
 * Read all jobs in DB, or read all jobs with the given query params.
 */
router.get("/api/jobs", async (req, res) => {
    const { role_title, jhed, ejhed,
        ajhed, wage, hour_limit, department_title,
        job_active, grant_id } = req.query;

    jobs
        .read(role_title, jhed, ejhed, ajhed, wage, hour_limit, department_title, job_active, grant_id)
        .then((jobs) => res.json({data: jobs}))
        .catch((err) => errorHandler(res, 500, err));
});

/**
 * Read a job with the given id.
 */
router.get("/api/jobs/:id", (req, res) => {
    const { id } = req.params;

    jobs
        .readById(id)
        .then((job) =>
            job
                ? res.json({ data : job })
                : errorHandler(res, 404, "Resource not found")
        )
        .catch((err) => errorHandler(res, 500, err));
});

/**
 * Update the values of a job with the given id.
 */
router.patch("/api/jobs/:id", (req, res) => {
    const { id } = req.params;
    const { role_title, jhed, ejhed,
            ajhed, wage, hour_limit, department_title,
            job_active, grand_id } = req.body;

    jobs
        .updateJob(id, role_title, jhed, ejhed,
            ajhed, wage, hour_limit, department_title,
            job_active, grand_id)
        .then((job) => res.json({ data : job }))
        .catch((err) => errorHandler(res, 404, "Resource not found"));
});

/**
 * Delete a job with the given id.
 */
router.delete("/api/jobs/:id", (req, res) => {
    const { id } = req.params;

    jobs
        .deleteById(id)
        .then((id) => res.json({ data : id }))
        .catch((err) => errorHandler(res, 404, "Resource not found"));
});

module.exports = router;