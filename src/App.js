import "./styles.css";
import React, { useState } from "react";

var GamesDB = {
  OpenWorld: [
    { name: "Destiny 2", Ratings: "4.2/5" },
    { name: "red dead redemption 2", Ratings: "4.8/5" }
  ],
  Story_Based: [
    { name: "God of war 4", Ratings: "4.5/5" },
    { name: "Detroit: Become Human", Ratings: "4.9/5" },
    { name: "Metro Exodus", Ratings: "4.5/5" }
  ],
  Survival: [
    { name: "Dead By Daylight 2", Ratings: "Unknown" },
    { name: "Resident Evil Village", Ratings: "4.7/5" }
  ]
};

var GamesfromDB = Object.keys(GamesDB);

export default function App() {
  const [selectedGenre, setGenre] = useState("OpenWorld");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎮 Good Games</h1>
      <h2>Checkout some of the Crazy Games out there</h2>

      <div>
        {GamesfromDB.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "E5E7EB",
              padding: "0.5rem 1rem",
              margin: "1rem 0.3rem",
              border: "1px solid black",
              borderRadius: "0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}></ul>
        {GamesDB[selectedGenre].map((Games) => (
          <li
            key={GamesDB.name}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid #D1D5DB",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.5rem"
            }}
          >
            {" "}
            <div style={{ fontSize: "larger" }}>{Games.name}</div>
            <div style={{ fontSize: "smaller" }}>{Games.Ratings}</div>
          </li>
        ))}
      </div>
    </div>
  );
}
