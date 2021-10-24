import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GridCard from "./GridCard"

export default function FullWidthGrid() {

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <GridCard number={1}/>
            <GridCard number={2}/>
            <GridCard number={3}/>
            <GridCard number={4}/>
            <GridCard number={5}/>
            <GridCard number={6}/>
            <GridCard number={7}/>
            <GridCard number={8}/>
            <GridCard number={9}/>
            <GridCard number={10}/>
            <GridCard number={11}/>
            <GridCard number={12}/>
        </Grid>
    </Box>
  );
}
