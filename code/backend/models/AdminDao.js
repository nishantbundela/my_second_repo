const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Data Access Object for Admin.
 */
class AdminDao {
    constructor() {
    }

    async create(jhed, firstName, lastName) {
        const admin = await prisma.admin.create({
            data: {
                ajhed: jhed,
                first_name: firstName,
                last_name: lastName
            },
        })
        return admin;
    }

    async readAll() {
        const allAdmins = await prisma.admin.findMany();
        return allAdmins;
    }

    async readByJhed(jhed) {
        const admin = await prisma.admin
            .findUnique({
                where: {
                    ajhed: jhed,
                },
            });
        return admin;
    }

    async deleteByJhed(jhed) {
        const admin = await prisma.admin.delete({
            where: {
                ajhed: jhed
            },
        })
        return admin;
    }

    async updateNameByJhed(jhed, firstName, lastName) {
        const admin = await prisma.admin.update({
            where: {
                ajhed: jhed,
            },
            data: {
                first_name: firstName,
                last_name: lastName,
            },
        });
        return admin;
    }
}

module.exports = AdminDao;