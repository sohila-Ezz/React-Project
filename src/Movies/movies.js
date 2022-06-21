import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const Movies = () => {
  const [Movies, setMovies] = useState([]);
  const[page,setPage]=useState(1);
  const[Query,setQuery]=useState("");
  const image="https://image.tmdb.org/t/p/w500/";
  useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5a1d6c5c7bf57a5815b63fba30751750&page=${page}`)
  .then((res)=>{
   console.log(res.data);
   setMovies(res.data.results);
  }).catch((err)=>{
   console.log(err);
  })
  },[page]);
  return (
    <>
    <div className='container mt-4'>
    <div class="input-group mb-3">
        <input type="text" className='form-control search' placeholder="Search..."  onChange={(e)=>setQuery(e.target.value)}/>
   </div>

      <div className="row row-cols-1 row-cols-md-2 g-4" style={{  width:"100%" }}>
        {Movies.filter(e=>e.title.toLowerCase().includes(Query))
.map((Movie) => {
          return (
            <div className="col" key={Movie.id}>
              <div className="card">
                <img
                  src={image+Movie.poster_path}
                  style={{ height: "400px"  }}
                  className="card-img-top"
                  alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{Movie.title}</h5>
                  <span className="card-text me-4"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> {Movie.release_date}</span>
              <span className="card-text"><i class="fa fa-comments" aria-hidden="true"></i>{Movie.vote_count}</span>

                  <Link to={`/detailes/${Movie.id}`}>Details</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row paginate"> 
      <button  onClick={()=>setPage(page-1)} className="col-2 btn btn-primary  mt-4 d-flex justify-content-center">Previous</button>
      <span className='col-8'></span>
      <button onClick={()=>setPage(page+1)} className="col-2 btn btn-primary  mx-auto  mt-4 d-flex justify-content-center">Next</button>
      </div>
      </div>
    </>
);
  
};

export default Movies;
