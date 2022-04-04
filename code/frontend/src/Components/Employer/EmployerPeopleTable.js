import * as React from "react";
import Paper from "@mui/material/Paper";
import MaterialTable from '@material-table/core'


import AddPeopleFAB from "../AddPeopleFAB";

const columns = [
  {field: 'jhed', title: 'JHED'},
  {field: 'first', title: 'First Name'},
  {field: 'last', title: 'Last Name'},
  {field: 'jobID', title: 'Job ID'},
  {field: 'jobName', title: 'Job Name'},
  {field: 'totalHours', title: 'Total Hours Logged', type: 'double'}, 
  {field: 'submitStatus', title: 'Submit Status', type: 'boolean'},
  {field: 'approval', title:'Approval Status', type:'boolean'}
];

/*
The below is all dummy data to be filled in by the database
*/
const dummyData = [
  {jhed: '123A45', first: 'Jay', last: 'Pay', jobID: '123456', jobName: 'OOSE CA', totalHours: '5.5', submitStatus: true, approval: true},
  {jhed: '743H23', first: 'May', last: 'Hay', jobID: '987343', jobName: 'OOSE CA', totalHours: '7.0', submitStatus: true, approval: false},
  {jhed: '982B43', first: 'Lay', last: 'May', jobID: '123456', jobName: 'OOSE CA', totalHours: '3.5', submitStatus: false, approval: false}
];

export default function PeopleTable() {

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <MaterialTable columns = {columns} data = {dummyData} title = "People Information"
      options = {{filtering: true}}
      /> 
      <AddPeopleFAB/>
    </Paper>
  );
}
