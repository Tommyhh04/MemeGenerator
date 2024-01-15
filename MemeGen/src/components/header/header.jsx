import "./header.css";
import Trollface from "../Images/Trollface.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header--title">
        <img src={Trollface}></img>
        <h2>Meme Generator</h2>
      </div>
      <h3>React Course - Project 3</h3>
    </header>
  );
}
