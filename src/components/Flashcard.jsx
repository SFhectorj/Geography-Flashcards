import React, { useState } from "react";

export default function Flashcard({ card }) {
    const [flipped, setFlipped] = useState(false);
    const [userGuess, setUserGuess] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);

    const handleSubmit = () => {
      if (userGuess.trim().toLowerCase() === card.answer.toLowerCase()) {
        setIsCorrect(true);
        setFlipped(true);
      } else {
        setIsCorrect(false);
      }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case "Easy": return "#486856";
            case "Medium": return "#BA8E23";
            case "Hard": return "#660000";
            default: return "#ffffff";
        }
    };

  return (
    <div className="flip-card">
      <div className="flashcard-wrapper">
        <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}>
          <div
            className="flashcard front"
            style={{ backgroundColor: getCategoryColor(card.category) }}
          >
            {card.image && <img src={card.image} alt="card visual" className="card-image" />}
            <p>{card.question}</p>
            <input
              type="text"
              className="guess-input"
              placeholder="Enter your guess"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
            />
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
            {isCorrect === false && <p className="feedback incorrect">Incorrect. Try again!</p>}
          </div>
          <div
            className="flashcard back"
            style={{ backgroundColor: getCategoryColor(card.category) }}
          >
            {card.image && <img src={card.image} alt="card visual" className="card-image" />}
            <p>{card.answer}</p>
            {isCorrect && <p className="feedback correct">Correct!</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
