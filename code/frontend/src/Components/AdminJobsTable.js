import * as React from 'react';
import Paper from '@mui/material/Paper';
import MaterialTable from '@material-table/core'

const columns = [
  { field: 'jobID', title: 'Job ID', filtering: false },
  { field: 'assignStatus', title: 'Assigned', type: 'boolean'},
  { field: 'jobName', title: 'Role Name', sorting: false},
  { field: 'supervisor', title: 'Supervisor'},
  { field: 'jhed', title: 'Employee JHED', filtering: false},
  { field: 'first', title: 'First Name', defaultSort: "asc", filtering: false},
  { field: 'last', title: 'Last Name', defaultSort: "asc", filtering: false}
];

const dummyData = [
  {jobID: '123456', assignStatus: true, jobName: 'OOSE CA', supervisor: 'Ali Madooei', jhed: '123A45', first: 'Jay', last: 'Pay'},
  {jobID: '987343', assignStatus: true, jobName: 'OOSE CA', supervisor: 'Ali Madooei', jhed: '743H23', first: 'May', last: 'Hay'},
  {jobID: '123456', assignStatus: false, jobName: 'OOSE CA', supervisor: 'Ali Madooei', jhed: '982B43', first: 'Lay', last: 'May'}
]


export default function JobsTable() {

  return (
  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <MaterialTable columns = {columns} data = {dummyData} title = "Jobs Information"
      options = {{filtering: true}}
    />  
  </Paper>
  );
}