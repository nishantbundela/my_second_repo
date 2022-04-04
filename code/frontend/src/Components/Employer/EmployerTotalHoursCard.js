import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Total Hours Submitted:
      </Typography>
      <Typography variant="h4">
        74
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Up 2 hours from last pay period
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function EmployerTotalHoursCard() {
  return (
    <Box sx={{ minWidth: 175, maxWidth: 275}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}