import "./input.css";
/*Form for where the user inputs the text to be used in the meme*/

export default function UserInput() {
  return (
    <form className="userInput">
      <div className="userInput--forms">
        <input type="text" placeholder="Top text"></input>
        <input type="text" placeholder="Bottom text"></input>
      </div>
      <button>Get a new meme image 📦</button>
    </form>
  );
}
