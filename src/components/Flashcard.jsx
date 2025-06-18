import React, { useState } from "react";

export default function Flashcard({ card }) {
    const [flipped, setFlipped] = useState(false);

    const getCategoryColor = (category) => {
        switch (category) {
            case "Easy": return "#486856";
            case "Medium": return "#BA8E23";
            case "Hard": return "#660000";
            default: return "#ffffff";
        }
    };

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div
        className={`flashcard-inner ${flipped ? 'flipped' : ''}`}
      >
        <div
          className="flashcard front"
          style={{ backgroundColor: getCategoryColor(card.category) }}
        >
          {card.image && <img src={card.image} alt="card visual" className="card-image" />}
          <p>{card.question}</p>
        </div>
        <div
          className="flashcard back"
          style={{ backgroundColor: getCategoryColor(card.category) }}
        >
          {card.image && <img src={card.image} alt="card visual" className="card-image" />}
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
}
