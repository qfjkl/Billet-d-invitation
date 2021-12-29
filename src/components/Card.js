import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nouvelle invitation
        </Typography>
        <Grid  container>
                <Grid item>
                </Grid>
        </Grid>

      </CardContent>

    </Card>
  );
}
