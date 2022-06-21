import React from "react";
import { useParams ,useLocation } from "react-router-dom";

const MovieDetailes = (props) => {
  const params=useParams();
  return (
    <div>
        <h1>MovieDetailes{params.id}</h1>
    </div>
);
  
};

export default MovieDetailes;