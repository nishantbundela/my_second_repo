DROP TABLE Job CASCADE;
DROP TABLE Timesheets CASCADE;
DROP TABLE Admin CASCADE;
DROP TABLE Employer CASCADE;
DROP TABLE Employee CASCADE;
DROP TABLE Department CASCADE;

CREATE TABLE Admin (
    aJHED VARCHAR ( 20 ) PRIMARY KEY,
    First_Name VARCHAR ( 50 ) NOT NULL,
    Last_Name VARCHAR ( 50 ) NOT NULL
);

CREATE TABLE Department (
    Department_title VARCHAR ( 50 ) PRIMARY KEY
);

CREATE TABLE Employer (
    eJHED VARCHAR ( 20 ) PRIMARY KEY,
    First_Name VARCHAR ( 50 ) NOT NULL,
    Last_Name VARCHAR ( 50 ) NOT NULL

);

CREATE TABLE Employee (
    JHED VARCHAR ( 20 ) PRIMARY KEY,
    First_Name VARCHAR ( 50 ) UNIQUE NOT NULL,
    Last_Name VARCHAR ( 50 ) NOT NULL,
    User_role VARCHAR (255) NOT NULL,
    Nationality bool,
    eJHED VARCHAR ( 20 ),
    aJHED VARCHAR ( 20 ),
    FOREIGN KEY (eJHED) REFERENCES Employer (eJHED),
    FOREIGN KEY (aJHED) REFERENCES Admin (aJHED)
);

CREATE TABLE Job (
    Job_ID VARCHAR (20) PRIMARY KEY,
    Role_title VARCHAR (255),
    JHED VARCHAR (20),
    eJHED VARCHAR (20),
    aJHED VARCHAR (20),
    Wage NUMERIC,
    Hour_Limit NUMERIC,
    Department_title VARCHAR (50),
    Job_active bool,
    Grant_ID VARCHAR (255),
    FOREIGN KEY (JHED) REFERENCES Employee (JHED),
    FOREIGN KEY (eJHED) REFERENCES Employer (eJHED),
    FOREIGN KEY (aJHED) REFERENCES Admin (aJHED),
    FOREIGN KEY (Department_title) REFERENCES Department (Department_title)
);

CREATE TABLE Timesheets (
    Job_ID VARCHAR (20),
    JHED VARCHAR (20),
    Date DATE NOT NULL,
    Start_hours TIMESTAMP,
    End_hours TIMESTAMP,
    Approval bool,
    Constraint PK_JHED_JobID_Date PRIMARY KEY (JHED, Job_ID, Date),
    FOREIGN KEY (JHED) REFERENCES Employee (JHED),
    FOREIGN KEY (Job_ID) REFERENCES Job (Job_ID)
);

-------------------- NOW RUN IN POSTGRESQL SHELL --------------------

\copy admin FROM '/Users/andrewsuh/Documents/JHU/06_Spring 2022/01_OOSE/project-team-14-lego/code/backend/data/sample_data/admin.csv' delimiter ',' CSV HEADER;
\copy department FROM '/Users/andrewsuh/Documents/JHU/06_Spring 2022/01_OOSE/project-team-14-lego/code/backend/data/sample_data/department.csv' delimiter ',' CSV HEADER;
\copy employer FROM '/Users/andrewsuh/Documents/JHU/06_Spring 2022/01_OOSE/project-team-14-lego/code/backend/data/sample_data/employer.csv' delimiter ',' CSV HEADER;
\copy employee FROM '/Users/andrewsuh/Documents/JHU/06_Spring 2022/01_OOSE/project-team-14-lego/code/backend/data/sample_data/employee.csv' delimiter ',' CSV HEADER;
\copy job FROM '/Users/andrewsuh/Documents/JHU/06_Spring 2022/01_OOSE/project-team-14-lego/code/backend/data/sample_data/job.csv' delimiter ',' CSV HEADER;
\copy timesheet FROM '/Users/andrewsuh/Documents/JHU/06_Spring 2022/01_OOSE/project-team-14-lego/code/backend/data/sample_data/timesheet.csv' delimiter ',' CSV HEADER;