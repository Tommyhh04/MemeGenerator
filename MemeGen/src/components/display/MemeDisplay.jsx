/*Displays the meme image with the added text from  user input*/
import Grafild from "../Images/Grafild.jpg";
import "./display.css";

export default function Display() {
  return (
    <div className="Display--container">
      <div className="Display">
        <img className="Meme--Img" src={Grafild}></img>
        <h1>Bottom text</h1>
      </div>
    </div>
  );
}
