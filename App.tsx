import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Isabelle please",
  "PLEASE PLEASE PLEASE",
  "Don't do this to me",
  "This is embarassing",
  "You're breaking my heat ;(",
  "I'm gonna cry",
  "Now I'm crying",
  "Isabelle why",
  "I'M CRYING NOW",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/XyVhDqY8T7MAAAAi/baby-yoda-so-cute.gif"
          />
          <div className="valentine-question-aurebesh">Yay!!!</div>
          <div className="valentine-question">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            alt="grogu question"
            src="https://media.tenor.com/1BXARRpFneAAAAAj/%D0%B91.gif"
          />
          <div className="valentine-question-aurebesh">
            Will you be my valentine?
          </div>
          <div className="valentine-question">Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              <div className="yes-aurebesh">Yes</div>
              <div className="yes-dance">Yes</div>
            </button>
            <button className="noButton" onClick={handleNoClick}>
              <div className="yes-aurebesh">{getNoButtonText()}</div>
              <div className="yes-dance">{getNoButtonText()}</div>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
