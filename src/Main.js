import react, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import movies from "./data.json"

const Main = () => {

    const [search, setSearch] = useState("");


    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="header">
                <nav>
                    <ul>

                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input type="text"
                            className="inputText"
                            onChange={handleChange}
                            value={search}
                        >
                        </input>

                    </div>
                </form>
            </div>
            <div className="container">
                {
                    (movies.filter((movie) =>
                        (search) ? movie.title.toLowerCase().includes(search.toLowerCase()) : movie))
                        .map((movie, index) => <Card key={index} movie={movie} />)

                }

            </div>
        </>
    )
}
export default Main;