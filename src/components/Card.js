import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 100,
    margin: 20,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="p" component="h3">
          Tell Congress: Pass the COVID-19 Compassion and Martha Wright Prison Phone Justice Act.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Keep incarcerated people and their families connected, now and forever.
        </Typography>
      </CardContent>
    </Card>
  );
}