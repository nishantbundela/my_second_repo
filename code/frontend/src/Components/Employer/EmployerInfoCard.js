import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Total Employees:
      </Typography>
      <Typography variant="h4">
        20
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Total Jobs:
      </Typography>
      <Typography variant="h4">
        22
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Timesheets Pending Approval:
      </Typography>
      <Typography variant="h4">
        6
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function EmployerInfoCard() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 375}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}