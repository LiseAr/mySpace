import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import ImageCard from './ImageCard';
import projects from '../static/projects'
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
}))

export default function Projects() {

  const classes = useStyles();
  const checked = useWindowPosition('header');

  useEffect(() => {
    console.log(checked);
  }, [checked])

  return (
    <div className={classes.root} id="projects">
      <ImageCard project={projects[0]} checked={checked} />
      <ImageCard project={projects[1]} checked={checked} />
    </div>
  )
}
