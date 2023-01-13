import react from "react";


const Card = ({ movie, handledelete }) => {

    const deleteMovie = () => {
        handledelete(movie.title)
    }
    return (
        <>
            <div className="movie">
                <img className="poster" src={movie.src}></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.title}</h4>
                    </div>
                    <button onClick={deleteMovie}>Delete</button>
                </div>
            </div>
        </>
    )
}
export default Card;