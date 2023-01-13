import react, { useState } from "react";
import { useEffect } from "react";
import AddMovie from "./AddMovie";
import Card from "./Card";

const Main = ({ addMovie, movies }) => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setData(movies)
    }, [])

    useEffect(() => {
        setData(movies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())))
    }, [search, movies])

    const handledelete = (name) => {
        setData(movies.filter((movie) =>
            movie.title.toLowerCase() != name.toLowerCase()))
    }
    return (
        <>
            <div>
                <form>
                    <div className="search-btn">
                        <input type="text"
                            className="inputText"
                            onChange={handleChange}
                            value={search}
                            placeholder="Search movie name..."
                        >
                        </input>
                        <AddMovie addMovie={addMovie} />

                    </div>

                </form>
            </div>
            <div className="container">
                {
                    data.map((movie, index) => <Card key={index} movie={movie} handledelete={handledelete} />)


                }

            </div>

        </>
    )
}
export default Main;