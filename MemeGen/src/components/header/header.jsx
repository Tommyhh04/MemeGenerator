import "./header.css";
import Trollface from "../Images/Trollface.png";

/*Header card displaying name and project number*/
export default function Header() {
  return (
    <header className="header">
      {/*Title and icon*/}
      <div className="header--title">
        <img src={Trollface}></img>
        <h2>Meme Generator</h2>
      </div>
      {/*Project number*/}
      <h4>React Course - Project 3</h4>
    </header>
  );
}
