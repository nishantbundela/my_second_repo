const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Data Access Object for Employers.
 */
class EmployerDao {
    constructor() {
    }

    async create(ejhed, first_name, last_name) {
        const employer = await prisma.employer.create({
            data: {
                ejhed: ejhed,
                first_name: first_name,
                last_name: last_name
            },
        })
        return employer;
    }

    async read(first_name, last_name) {
        const employers = await prisma.employer.findMany({
            where: {
                first_name: first_name,
                last_name: last_name
            }
        });
        return employers;
    }

    async readById(id) {
        const employer = await prisma.employer.findUnique({
            where: {
                ejhed: id
            },
        });
        return employer;
    }

    async deleteById(id) {
        const employer = await prisma.employer.delete({
            where: {
                ejhed: id
            },
        })
        return employer;
    }

    async update(jhed, first_name, last_name) {
        const employer = await prisma.employer.update({
            where: {
                ejhed: jhed
            },
            data: {
                first_name: first_name,
                last_name: last_name
            }
        });
        return employer;
    }
}

module.exports = EmployerDao;