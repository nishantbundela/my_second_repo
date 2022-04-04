import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

/*
  This component displays the current pay period. Should be renamed to PayPeriodCard
  at some point because it should be a component common to all views.
*/

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Pay Period
      </Typography>
      <Typography variant="h6">
        02/28/2022
        <br />
        -
        <br />
        03/06/2022
      </Typography>
    </CardContent>
    <CardActions>
      <Button startIcon = {<ArrowBackIosIcon/>} size="small">Previous</Button>
      <Button endIcon = {<ArrowForwardIosIcon/>} size="small">Next</Button>
    </CardActions>
  </React.Fragment>
);

export default function AdminPayPeriodCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}