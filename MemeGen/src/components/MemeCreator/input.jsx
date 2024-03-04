import React from "react";
import "./input.css";
import memesData from "../memes/memesData";

//This is the base of the generator
export default function UserInput() {
  //Saves the meme related data as an object called "meme"
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  // Function to get a random meme image from a API or local stored data file

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  //Displays the buttons
  return (
    <main>
      <div className="userInput">
        <div className="userInput--forms">
          {/*Text boxes for where the user can type in the top and bottom text that is used in the meme*/}
          <input type="text" placeholder="Top text"></input>
          <input type="text" placeholder="Bottom text"></input>
        </div>
        <button onClick={getMemeImage}>Get a new meme image 📦</button>
      </div>
      {/*Displays the meme*/}
      <div className="image--container">
        <img src={meme.randomImage} className="meme--mage"></img>
      </div>
    </main>
  );
}
