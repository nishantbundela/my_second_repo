import * as React from "react";
import Paper from "@mui/material/Paper";
import MaterialTable from '@material-table/core'
import IconButton from '@mui/material/IconButton';


import AddPeopleFAB from "./AddPeopleFAB";
import Button from "@mui/material/Button";




function DisableButton() {
  const [disable, setDisable] = React.useState(false);

  return (
  <Button disabled={disable} onClick={() => setDisable(true)} variant='contained' color = 'primary' fullWidth>Approve</Button>
  )  
}

const columns = [
  {field: 'jhed', title: 'JHED'},
  {field: 'first', title: 'First Name'},
  {field: 'last', title: 'Last Name'},
  {field: 'jobID', title: 'Job ID'},
  {field: 'jobName', title: 'Job Name'},
  {field: 'employer', title: 'Supervisor'},
  {field: 'submitStatus', title: 'Submit Status', type: 'boolean'},
  {field: 'Approval', title: 'Approve Timesheet'}
];

/*
The below is all dummy data to be filled in by the database
*/
//const btn =<Button variant='contained' color = 'primary' fullWidth onClick={(e) => {e.preventDefault();window.location.href="/admin"}}>Approve</Button>)
const dummyData = [
  {jhed: '123A45', first: 'Jay', last: 'Pay', jobID: '123456', jobName: 'OOSE CA', employer: 'Ali Madooei', submitStatus: true, Approval: <DisableButton/> },
  {jhed: '743H23', first: 'May', last: 'Hay', jobID: '987343', jobName: 'OOSE CA', employer: 'Ali Madooei', submitStatus: true, Approval: <DisableButton/> },
  {jhed: '982B43', first: 'Lay', last: 'May', jobID: '123456', jobName: 'OOSE CA', employer: 'Ali Madooei', submitStatus: true, Approval: <DisableButton/> }
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
