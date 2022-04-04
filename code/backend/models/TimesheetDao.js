const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Data Access Object for Timesheets.
 */
class TimesheetDao {
    constructor() {
    }

    async create(job_id, jhed, date, start_hours, end_hours, approval) {
        if(approval == "true") approval = true;
        else approval = false;

        const startTime = start_hours.split(":");
        const endTime = end_hours.split(":");
        let dateDate, dateStart, dateEnd;

        if(date != null) {
            dateDate = new Date(date);
            dateStart = new Date(date);
            dateEnd = new Date(date);

            dateStart.setUTCHours(parseInt(startTime[0]), parseInt(startTime[1]));
            dateEnd.setUTCHours(parseInt(endTime[0]), parseInt(endTime[1]));
        }

        const timesheet = await prisma.timesheet.create({
            data: {
                job_id: job_id,
                jhed: jhed,
                date: dateDate,
                start_hours: dateStart,
                end_hours: dateEnd,
                approval: approval
            },
        })
        return timesheet;
    }

    async read(job_id, jhed, date, approval) {
        if(approval == "true") approval = true;
        if(approval == "false") approval = false;

        if(date != null) {
            date = new Date(date);
        }

        const timesheets = await prisma.timesheet.findMany({
            where: {
                job_id: job_id,
                jhed: jhed,
                date: date,
                approval: approval
            }
        });
        return timesheets;
    }

    async delete(job_id, jhed, date, approval) {
        if(approval == "true") approval = true;
        if(approval == "false") approval = false;

        if(date != null) {
            date = new Date(date);
        }

        const timesheets = await prisma.timesheet.deleteMany({
            where: {
                job_id: job_id,
                jhed: jhed,
                date: date,
                approval: approval
            },
        })
        return timesheets;
    }

    async update(job_id, jhed, date, approval) {
        if(approval == "true") approval = true;
        if(approval == "false") approval = false;

        if(date != null) {
            date = new Date(date);
        }

        const timesheet = await prisma.timesheet.updateMany({
            where: {
                job_id: job_id,
                jhed: jhed,
                date: date
            },
            data: {
                approval: approval
            }
        });
        return timesheet;
    }
}

module.exports = TimesheetDao;