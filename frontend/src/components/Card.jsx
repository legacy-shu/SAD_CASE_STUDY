import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicCard({ activity_name, time, location, staff }) {
  return (
    <Grid item xs={5}>
      <Item>
        <Card sx={{ minWidth: 250 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="div">
              {activity_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {time}
            </Typography>
            <Typography variant="body2">
              {location}
              <br />
              {staff}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Enter</Button>
          </CardActions>
        </Card>
      </Item>
    </Grid>
  );
}
