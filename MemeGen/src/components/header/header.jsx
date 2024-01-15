import "./header.css";
import Trollface from "../Images/Trollface.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header--title">
        <img src={Trollface}></img>
        <h1>Meme Generator</h1>
      </div>
      <h3>React Course - Project 3</h3>
    </div>
  );
}
