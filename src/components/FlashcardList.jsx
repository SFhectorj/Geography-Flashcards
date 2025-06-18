import React, { useState } from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setCurrentIndex(randomIndex);
    };

    return (
        <div className="flashcard-list">
            {cards.length > 0 ? (
                <>
                <Flashcard card={cards[currentIndex]} />
                <button className="next-button" onClick={showRandomCard}>Next</button>
                </>
            ) : (
                <p>No cards available in this category</p>
            )}
        </div>
    );
}
