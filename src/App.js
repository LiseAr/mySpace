import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Projects from './components/Projects';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.png"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}))

export default function App() {
  const classes = useStyles();
  return (<div className={classes.root}>
    <CssBaseline />
    <Header />
    <Projects />
  </div>);
}
