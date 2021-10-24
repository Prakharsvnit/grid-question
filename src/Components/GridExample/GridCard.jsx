import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const GridCard = ({number}) => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                    <Item>{number}</Item>
            </Grid>
    )
}

export default GridCard
