import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="110"
          src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hiring
          </Typography>
          <Typography variant="body2" noWrap="true" color="textSecondary" component="p">
            If you really want a job please visit here and leave after having it, we don't mind how stupid
            are you, there is gaurantee that you will get a job here and if you cooperate well you might
            get the job that you deserve. Just be patient and humble and leave the rest to us. We are a team
            experiance which can get you what you deserve and maybe what you seek for.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size="small" color="inherit">
          <ShareIcon/>
        </IconButton>
        <Button size="small" color="inherit">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}