import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 240,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  }
});

export default function ImageCard({ project, checked }) {
  const classes = useStyles();

  React.useEffect(() => {
    console.log(checked);
  }, [])

  return (
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Card className={classes.root}>
        <CardMedia
          component="img"
          image={project.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.description}
          >
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
