import react from "react";


const Card = ({ movie }) => {
    return (
        <>
            <div className="movie">
                <img className="poster" src={movie.src}></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.title}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;