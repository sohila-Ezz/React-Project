import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetailes = (props) => {
  const history = useHistory();
  const redirectToMovies = () => {
    history.push("/Movies");
  }

  const params = useParams();
  const image="https://image.tmdb.org/t/p/w500/";
  const [Movie, setMovie] = useState({});
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie?api_key=5a1d6c5c7bf57a5815b63fba30751750/${params.id}`)
            .then((res) => {
                console.log(res.data);
                setMovie(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
  // axiosInstance.post("url",{},{})
  return (
    <>
    <div className='container'>
    <div className="col" key={Movie.id}>
              <div className="card">
                <img
                  src={image+Movie.poster_path}
                  style={{ height: "400px"  }}
                  className="card-img-top"
                  alt="..."/>
               
                  <h5 className="card-title">{Movie.title}</h5>
                  <p className="card-text me-4"> {Movie.overview}</p>
              <span className="card-text">{Movie.vote_count}</span>
                
              </div>
              </div>
          <br/>
          <div className='paginate'>
          <button className="btn btn-primary mt-4" onClick={() => redirectToMovies()}>
             Go To Movies
      </button>
      </div>
        
      </div>
      </>
  );
};

export default MovieDetailes;