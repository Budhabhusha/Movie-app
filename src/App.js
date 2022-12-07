import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
// import SimpleInput from "./components/Form/SimpleInput";
import BasicForm from "./components/Form/BasicForm";

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
      <div className="app">
        <BasicForm />
        {/* <SimpleInput /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
