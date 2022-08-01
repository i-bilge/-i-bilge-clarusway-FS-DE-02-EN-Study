import { useNavigate } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({title, poster_path, overview, vote_average, id})=>{

    // use auth to navigate to details page for movie:
    const navigate = useNavigate();

    // this just sets a color based on the movie rating:
    const setVoteClass = (vote)=>{
        if(vote >= 8){
            return "green"
        }else if(vote>=6){
            return "orange"
        }else{
            return "red"
        }
    }

    return(
        <div 
            className="movie"
            // Tomorrow we will use AUTH to make sure the user is
            // authenticated before navigating to the details page
            onClick={()=>{
                console.log("AUTHENTICATION TOMORROW!")
                navigate("details/" + id)
            }}
        >
            <img 
                src={poster_path ? IMG_API + poster_path : defaultImage}
                alt={title}
            />
            <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
                <h5>{title}</h5>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieCard