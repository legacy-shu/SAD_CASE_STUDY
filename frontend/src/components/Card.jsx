import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardHeader,
} from '@mui/material';
import Switch from './Switch';

const MUICard = ({
  session,
  openedSession,
  openSession,
  attendanceService,
}) => {
  return (
    <Card>
      {openedSession ? (
        <CardHeader
          title={session?.passcode ? `PASSCODE : ${session?.passcode}` : null}
          titleTypographyProps={{ variant: 'h5', color: 'red' }}
          action={
            <Switch
              openSession={openSession}
              attendanceService={attendanceService}
              passcode={session?.passcode}
            />
          }
        ></CardHeader>
      ) : null}
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/200/300?random=${session?._id}`}
        alt="unsplash image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {session?.date}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {session?.activity_name}
        </Typography>
        <Typography gutterBottom variant="body" component="div">
          {session?.time}
        </Typography>
        <Typography gutterBottom variant="body" component="div">
          {session?.location}
        </Typography>
        <Typography
          gutterBottom
          variant="body"
          color="text.secondary"
          component="div"
        >
          {session?.staff_members?.[0]?.name}
        </Typography>

        <Typography gutterBottom variant="body2" color="red" component="div">
          {session?.passcode}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MUICard;
