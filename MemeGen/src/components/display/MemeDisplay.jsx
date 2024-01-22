import Grafild from "../Images/Grafild.jpg";
import "./display.css";

/*Displays the meme image with the added text from  user input*/
export default function Display() {
  return (
    <div className="Display--container">
      <div className="Display">
        {/*Displays the meme*/}
        <img className="Meme--Img" src={Grafild}></img>
      </div>
    </div>
  );
}
