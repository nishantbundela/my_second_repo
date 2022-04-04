const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Data Access Object for Department.
 */
class DepartmentDao {
    constructor() {
    }

    async create(title) {
        const department = await prisma.department.create({
            data: {
                department_title: title
            },
        })
        return department;
    }

    async readAll() {
        const allDepartments = await prisma.department.findMany();
        return allDepartments;
    }


    async readByTitle(title) {
        const department = await prisma.department
            .findUnique({
                where: {
                    department_title: title
                },
            });
        return department;
    }

    async deleteByTitle(title) {
        const department = await prisma.department.delete({
            where: {
                department_title: title
            },
        })
        return department;
    }

    async updateDepartmentTitle(fromTitle, toTitle) {
        const department = await prisma.department.update({
            where: {
                department_title: fromTitle
            },
            data: {
                department_title: toTitle
            },
        });
        return department;
    }
}

module.exports = DepartmentDao;