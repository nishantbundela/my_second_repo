const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Data Access Object for Employees.
 */
class EmployeeDao {
    constructor() {
    }

    async create(jhed, first_name, last_name, user_role, nationality, ejhed, ajhed) {
        const employee = await prisma.employee.create({
            data: {
                jhed: jhed,
                first_name: first_name,
                last_name: last_name,
                user_role: user_role,
                nationality: nationality,
                ejhed: ejhed,
                ajhed: ajhed
            },
        })
        return employee;
    }

    async read(first_name, last_name, user_role, nationality, ejhed, ajhed) {
        const employees = await prisma.employee.findMany({
            where: {
                first_name: first_name,
                last_name: last_name,
                user_role: user_role,
                nationality: nationality,
                ejhed: ejhed,
                ajhed: ajhed
            }
        });
        return employees;
    }

    async readById(id) {
        const employee = await prisma.employee
            .findUnique({
                where: {
                    jhed: id
                },
            });
        return employee;
    }

    async deleteById(id) {
        const employee = await prisma.employee.delete({
            where: {
                jhed: id
            },
        })
        return employee;
    }

    async update(jhed, first_name, last_name, user_role, nationality, ejhed, ajhed) {
        const employee = await prisma.employee.update({
            where: {
                jhed: jhed
            },
            data: {
                first_name: first_name,
                last_name: last_name,
                user_role: user_role,
                nationality: nationality,
                ejhed: ejhed,
                ajhed: ajhed
            }
        });
        return employee;
    }
}

module.exports = EmployeeDao;