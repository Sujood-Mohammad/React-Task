import { Link } from "react-router-dom";

const MoviesList = (props) => {
 
  return (
    <div className="container">


      <div className="col-lg-12 my-5">
      <h3 className="text-center my-5">Our Movies</h3>
        <div className="latest_product_inner">
          <div className="row">
          {props.movies.map((movie)=> 
          
            <div className="col-lg-4 col-md-6  mb-3" key={movie.id}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top "
                  width="400"
                  height="250"
                  alt=""
                />

                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6
                      className="font-weight-semibold mb-2"
                      // className="text-default mb-2"
                      data-abc="true"
                      style={{ fontSize:'20px' }}
                    >
                      {movie.title}
                    </h6>
                    <p className="text-muted" data-abc="true">
                    {movie.release_date}
                    </p>
                   
                  </div>
                  <div>
                    <Link to={`/movie/${(movie.title).replace(/ /g, '')}/${movie.id}`} className="btn btn-outline-primary">
                      Show
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;