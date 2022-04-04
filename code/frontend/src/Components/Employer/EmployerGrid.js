import * as React from 'react';
import { Grid } from '@mui/material';
import AdminPayPeriodCard from '../AdminPayPeriodCard';
import EmployerInfoCard from './EmployerInfoCard';
import EmployerTotalHoursCard from './EmployerTotalHoursCard';

export function EmployerGrid() {
    return <Grid container spacing={4}>
        <Grid item xs sx={{backgroundColor: '#D739F6'}}>
            <AdminPayPeriodCard />
        </Grid>
        <Grid item xs={5} sx={{backgroundColor: '#777CDA' }}>
            <EmployerInfoCard />
        </Grid>
        <Grid item xs sx={{backgroundColor: '#77DAC6' }}>
            <EmployerTotalHoursCard />
        </Grid>
        <Grid item xs={4} sx={{backgroundColor: '#DAD477'}}>
            
        </Grid>
        <Grid item xs={8} sx={{backgroundColor: '#F08B3C'}}>
            
        </Grid>
        
    </Grid>
    ;
}
