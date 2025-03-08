import React from "react";
import FlashcardList from "./components/FlashcardList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>📚💡Data Structures and Algorithms Trivia!</h1>
      <h2>
        How well do you know data structures and algorithms? Test your CS
        knowledge with these flashcards!
      </h2>
      <FlashcardList />
    </div>
  );
};

export default App;
