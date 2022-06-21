import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const Movies = () => {
  const [Movies, setMovies] = useState([]);
  const image="https://image.tmdb.org/t/p/w500/";
  useEffect(()=>{
  axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5a1d6c5c7bf57a5815b63fba30751750")
  .then((res)=>{
   console.log(res.data);
   setMovies(res.data.results);
  }).catch((err)=>{
   console.log(err);
  })
  },[]);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">

        {Movies.map((Movie) => {
          return (
            <div className="col" key={Movie.id}>
              <div className="card">
                <img
                  src={image+Movie.poster_path}
                  style={{ height: "200px" }}
                  className="card-img-top"
                  alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{Movie.title}</h5>
                  <p className="card-text">{Movie.overview}</p>
                  <Link to={`/detailes/${Movie.id}`}>Details</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
);
  
};

export default Movies;
