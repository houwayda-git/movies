import react, { useState } from "react";
import { useEffect } from "react";
import './Style.css';
import Main from './Main.js'
import data from "./data.json"

function App() {
  const [movies, setMovies] = useState(data);

  const addMovie = (text) => {

    const title = text;
    const src = "https://th.bing.com/th/id/OIP.ga1i0QV-q_-XJNukBX4emAHaEz?pid=ImgDet&rs=1"
    const newObj = {
      title: title,
      src: src
    }

    const notes = [...movies, newObj]
    setMovies(notes);

  }

  return (
    <div className="App">
      <Main addMovie={addMovie} movies={movies} />
    </div>
  );
}

export default App;
