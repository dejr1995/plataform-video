import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import netflixavatar from "../img/netflixavatar.png";
import Plans from "../components/Plans"
import { NetflixButton } from '../styled/styledcomponents';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const classes = useStyle();
  const history = useNavigate();

  const signout = () => {
    auth.signOut();
    history("/login")
  }
  return (
    <div className={classes.root}>
      <Header></Header>
        <Typography variant='h3'>Edit Profile</Typography>
        <div className={classes.info}>
          <img src={netflixavatar} alt="avatar" />
          <div className={classes.details}>
            <div className={classes.plans}>
              <Typography variant='h6'>email usuario</Typography>
              <Typography className={classes.plansText} variant='h5' gutterBottom>Plans</Typography>
              <Plans cost={7.99}>Netflix Standar</Plans>
              <Plans cost={11.99}>Netflix Basic</Plans>
              <Plans wide="medium" color="gray" cost={15.99}>Netflix Premium</Plans>
              <NetflixButton onClick={ signout } wide="fullWidth">Sign Out</NetflixButton>
            </div>
          </div>
        </div>
    </div>
  )
}

const useStyle = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("xs")]:{
        display: "none"
      },
    },
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",
  },
  plansText: {
    borderBottom: "1px solid lightgray"
  }
}));

export default Profile