import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Total Employees in Department:
      </Typography>
      <Typography variant="h4">
        98
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function AdminTotalEmployeeCard() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 375}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}