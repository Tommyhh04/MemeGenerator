import "./input.css";
import memesData from "../memes/memesData";

export default function UserInput() {
  {
    /*This function gets a random url from the memesData.jsx in memes folder. 
    This url is a link to meme image wich will be used when the button is pressed to display user input text on top of the image*/
  }
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }
  /*Where the user inputs the text to be used in the meme*/
  return (
    <div className="userInput">
      <div className="userInput--forms">
        <input type="text" placeholder="Top text"></input>
        <input type="text" placeholder="Bottom text"></input>
      </div>
      <button onClick={getMemeImage}>Get a new meme image 📦</button>
    </div>
  );
}
