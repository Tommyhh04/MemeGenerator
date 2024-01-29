import React from "react";
import "./input.css";
import memesData from "../memes/memesData";

export default function UserInput() {
  const [memeImage, setMemeImage] = React.useState("");
  // Function to get a random meme image
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="userInput">
        <div className="userInput--forms">
          <input type="text" placeholder="Top text"></input>
          <input type="text" placeholder="Bottom text"></input>
        </div>
        <button onClick={getMemeImage}>Get a new meme image 📦</button>
      </div>
      <div className="image--container">
        <img src={memeImage} className="meme--mage"></img>
      </div>
    </main>
  );
}
