import React, { useState } from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flashcard-list">
            {cards.length > 0 ? (
                <>
                <Flashcard card={cards[currentIndex]} />
                <div className="navigation-buttons">
                    <button className={`prev-button ${currentIndex === 0 ? "disabled" : ""}`} onClick={handlePrevious} disabled={currentIndex === 0}>
                        Previous
                    </button>
                    <button className={`next-button ${currentIndex === cards.length - 1 ? "disabled" : ""}`} onClick={handleNext} disabled={currentIndex === cards.length - 1}>
                        Next
                    </button>
                </div>
                </>
            ) : (
                <p>No cards available in this category</p>
            )}
        </div>
    );
}
