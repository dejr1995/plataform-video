import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const classes = useStyle();
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      //console.log(request.data.results);
      setMovies(request.data.results)
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  //console.log(movies);

  return (
    <div className={classes.root}>
      <Typography variant='h4'>{title}</Typography>
      <div className={classes.posters}>
        {
          movies.map((movie) => 

          ((isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path)) && (
            <img  
            className={`${classes.poster} ${
              isLargeRow && classes.posterLarge
            }`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name} 
            />
          )
          )
        }
      </div>
      
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    color: "#fff",
    marginLeft: theme.spacing(4),
  },
  posters: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    },
  },
  poster: {
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  posterLarge: {
    maaxHeight: "15rem",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
}));

export default Row;
