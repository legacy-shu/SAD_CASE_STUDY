import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';

export const MUICard = ({ activity_name, time, location, staff, img }) => {
  return (
    <Box width="470px" sx={{ m: 1 }}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {activity_name}
          </Typography>
          <Typography gutterBottom variant="body" component="div">
            {time}
          </Typography>
          <Typography gutterBottom variant="body" component="div">
            {location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {staff}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Enter</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
