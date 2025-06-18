import React, { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import CardInfo from "./components/CardInfo";
import flashcards from "./data/flashcards";
import "./App.css";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards = 
    selectedCategory === "All" 
      ? flashcards 
      : flashcards.filter((card) => card.category === selectedCategory);

  return (
    <div className="app">
      <CardInfo title="Geoography Trivia" description="Test your world knowledge with fun geography facts!" total={filteredCards.length} />
      <div className="filter-container">
        <label htmlFor="category">Filter by Difficulty: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">ALL</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <FlashcardList cards={filteredCards} />
    </div>
  );
}
