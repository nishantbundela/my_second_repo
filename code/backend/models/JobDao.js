const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Data Access Object for Jobs.
 */
class JobDao {
    constructor() {
    }

    async create(job_id, role_title, jhed, ejhed, ajhed, wage, hour_limit, department_title, job_active, grant_id) {
        const job = await prisma.job.create({
            data: {
                job_id: job_id,
                role_title: role_title,
                jhed: jhed,
                ejhed: ejhed,
                ajhed: ajhed,
                wage: wage,
                hour_limit: hour_limit,
                department_title: department_title,
                job_active: job_active,
                grant_id: grant_id
            },
        })
        return job;
    }

    async read(role_title, jhed, ejhed, ajhed, wage, hour_limit, department_title, job_active, grant_id) {
        const jobs = await prisma.job.findMany({
            where: {
                role_title: role_title,
                jhed: jhed,
                ejhed: ejhed,
                ajhed: ajhed,
                wage: wage,
                hour_limit: hour_limit,
                department_title: department_title,
                job_active: job_active,
                grant_id: grant_id
            }
        });
        return jobs;
    }

    async readById(id) {
        const job = await prisma.job
            .findUnique({
                where: {
                    job_id: id
                },
            });
        return job;
    }

    async deleteById(id) {
        const job = await prisma.job.delete({
            where: {
                job_id: id
            },
        })
        return job;
    }

    async updateJob(id, role_title, jhed, ejhed, ajhed, wage, hour_limit, department_title, job_active, grant_id) {
        const job = await prisma.job.update({
            where: {
                job_id: id
            },
            data: {
                role_title: role_title,
                jhed: jhed,
                ejhed: ejhed,
                ajhed: ajhed,
                wage: wage,
                hour_limit: hour_limit,
                department_title: department_title,
                job_active: job_active,
                grant_id: grant_id
            }
        });
        return job;
    }
}

module.exports = JobDao;