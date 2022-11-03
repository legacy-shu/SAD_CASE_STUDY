import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

const MUICard = ({ session, link, size}) => {
  console.log(session);
  return (
    <Grid item xs={6}>
      <Box width={size} sx={{ m: 1 }}>
        <Link style={{ textDecoration: 'none' }} to={link}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={`https://picsum.photos/200/300?random=${session._id.$oid}`}
              alt="unsplash image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {session.activity_name}
              </Typography>
              <Typography gutterBottom variant="body" component="div">
                {session.time}
              </Typography>
              <Typography gutterBottom variant="body" component="div">
                {session.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {session['staff-members'][0].name}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Box>
    </Grid>
  );
};

export default MUICard;
