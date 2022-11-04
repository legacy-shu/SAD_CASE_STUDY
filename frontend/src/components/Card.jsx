import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardHeader,
} from '@mui/material';
import Switch from './Switch';

const MUICard = ({session, openedSession, openSession, passcode }) => {
  return (
    <Card>
      {openedSession ? (
        <CardHeader
          avatar={<Switch openSession={openSession} />}
          title={passcode ? `passcode : ${passcode}` : null}
          titleTypographyProps={{ variant: 'h5', color: 'red' }}
        ></CardHeader>
      ) : null}
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/200/300?random=${session._id.$oid}`}
        alt="unsplash image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {session.date}
        </Typography>
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
          {session.staff_members[0].name}
        </Typography>
        <Typography variant="body" color="text.secondary">
          {session.isOpened}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MUICard;
