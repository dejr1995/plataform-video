import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../img/milogo.png"

const Header = () => {
  const classes = useStyle();
  const [show, setShow] = useState(false);
  const history = useNavigate();

  const hideHeader = () => {
    if (window.scrollY > 100){
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return ()=>window.removeEventListener("scroll", hideHeader)
  }, [])

  return (
    <AppBar position='sticky' elevation={0} className={`${classes.root} ${show && classes.transparent}`}>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={()=>history.push("/")}>
        <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>
        <Avatar variant="square" style={{cursor: "pointer"}} 
        onClick={()=>history("/profile")}></Avatar>
      </Toolbar>
    </AppBar>
  )
}

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
  transparent: {
    backgroundColor: "transparent"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
  
}));

export default Header