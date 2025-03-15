import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./FlashcardList.css";

const flashcardsData = [
  { question: "What is the difference between an array and a linked list?", answer: "Arrays have fixed sizes and offer fast indexing, while linked lists allow dynamic memory allocation and efficient insertions/deletions." },
  { question: "What data structure follows the LIFO principle?", answer: "Stack (Last In, First Out)" },
  { question: "What data structure follows the FIFO principle?", answer: "Queue (First In, First Out)" },
  { question: "Which data structure is best suited for implementing recursion?", answer: "Stack" },
  { question: "What is a circular linked list?", answer: "A linked list where the last node points back to the first node, forming a cycle." },
  { question: "What is a doubly linked list?", answer: "A linked list where each node has pointers to both the previous and next nodes." },
  { question: "Which sorting algorithm has the best worst-case time complexity?", answer: "Merge Sort and Quick Sort (O(n log n))" },
  { question: "What is a heap data structure?", answer: "A complete binary tree used for priority queue operations, where the parent node is greater (max heap) or smaller (min heap) than its children." },
  { question: "What is a binary search tree (BST)?", answer: "A binary tree where each node's left child is smaller and the right child is greater than the parent." },
  { question: "What is the height of a tree?", answer: "The number of edges from the root to the deepest node." },
  { question: "What is a trie (prefix tree)?", answer: "A tree used for storing strings where each path represents a sequence of characters." },
  { question: "What is the advantage of a hash table over a binary search tree?", answer: "Hash tables provide O(1) average time complexity for lookup, insert, and delete operations, while BSTs take O(log n) in balanced cases." },
  { question: "What is a priority queue?", answer: "A queue where each element has a priority, and elements are dequeued based on priority rather than order of arrival." },
  { question: "Which data structure is commonly used for backtracking algorithms?", answer: "Stack" },
  { question: "What is a balanced tree?", answer: "A tree where the height of left and right subtrees of any node differ by at most one." },
  { question: "What is the difference between a max heap and a min heap?", answer: "In a max heap, the parent node is always greater than its children; in a min heap, it is always smaller." },
  { question: "What is a circular queue?", answer: "A queue where the last position connects back to the first to make efficient use of storage." },
  { question: "What data structure is used for depth-first search (DFS)?", answer: "Stack" },
  { question: "What data structure is used for breadth-first search (BFS)?", answer: "Queue" },
  { question: "What is the worst-case time complexity of inserting an element in a binary search tree?", answer: "O(n) for an unbalanced BST, O(log n) for a balanced BST." },
  { question: "Which data structure is best for checking for balanced parentheses?", answer: "Stack" },
  { question: "Which data structure can efficiently support range queries, such as sum or min/max queries?", answer: "Segment Tree or Fenwick Tree (Binary Indexed Tree)" },
  { question: "What is a self-balancing binary search tree?", answer: "A BST that maintains a balanced height, such as AVL trees and Red-Black trees." },
  { question: "What is the space complexity of an adjacency matrix representation of a graph?", answer: "O(V^2), where V is the number of vertices." },
  { question: "What is the space complexity of an adjacency list representation of a graph?", answer: "O(V + E), where V is vertices and E is edges." },
  { question: "What is a spanning tree?", answer: "A subgraph of a connected graph that includes all vertices with the minimum number of edges required to keep them connected." },
  { question: "What is a minimum spanning tree (MST)?", answer: "A spanning tree with the minimum total edge weight." },
  { question: "Which algorithm is used to find the shortest path in an unweighted graph?", answer: "Breadth-First Search (BFS)" },
  { question: "Which algorithm is used to find the shortest path in a weighted graph?", answer: "Dijkstra's Algorithm or Bellman-Ford Algorithm" },
  { question: "Which data structure is commonly used to implement Dijkstra’s Algorithm?", answer: "Priority Queue (Min Heap)" },
  { question: "What is the difference between Kruskal’s and Prim’s algorithms?", answer: "Kruskal’s algorithm works by sorting edges and adding them to the MST, while Prim’s algorithm builds the MST by expanding from a starting node." },
  { question: "What is a graph cycle?", answer: "A path in a graph where the starting and ending node are the same, forming a loop." },
  { question: "What is topological sorting?", answer: "A linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge (u, v), vertex u appears before v." },
  { question: "Which data structure is best for implementing LRU (Least Recently Used) Cache?", answer: "A combination of a HashMap and a Doubly Linked List" },
  { question: "What is the best-case time complexity of QuickSort?", answer: "O(n log n)" },
  { question: "What is the average-case time complexity of Merge Sort?", answer: "O(n log n)" },
  { question: "Which sorting algorithm is fastest for nearly sorted data?", answer: "Insertion Sort (O(n))" },
  { question: "Which searching algorithm is used in binary search trees?", answer: "Binary Search" },
  { question: "What is the difference between a singly and doubly linked list?", answer: "A singly linked list has a pointer to the next node only, while a doubly linked list has pointers to both previous and next nodes." },
  { question: "What is the time complexity of inserting an element at the beginning of a linked list?", answer: "O(1)" },
  { question: "What is the time complexity of inserting an element at the beginning of an array?", answer: "O(n), since all elements need to be shifted." },
  { question: "Which data structure is best for handling a large number of search queries efficiently?", answer: "Hash Table" },
  { question: "What is a deque (double-ended queue)?", answer: "A queue where elements can be added or removed from both ends." },
  { question: "Which data structure is best for autocomplete suggestions?", answer: "Trie (Prefix Tree)" },
  { question: "What is the difference between a stable and unstable sorting algorithm?", answer: "A stable sorting algorithm preserves the relative order of equal elements, while an unstable one does not." },
  { question: "What is the advantage of a Red-Black Tree over a regular Binary Search Tree?", answer: "Red-Black Trees balance themselves dynamically, ensuring O(log n) operations." },
  { question: "Which data structure is best for storing hierarchical data?", answer: "Tree" },
  { question: "What is amortized analysis in data structures?", answer: "A technique to average the time complexity of operations over a sequence of operations, commonly used in dynamic array resizing." }
];

// Function to get a random background color for the card
const getRandomColor = () => {
  const colors = ["#ffddcc", "#ffb3b3", "#d4a5a5", "#f9c5d1", "#c2e0c6"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const FlashcardList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  // Function to go to the next flashcard
  const nextFlashcard = () => {
    if (currentIndex < flashcardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    resetState();
  };

  // Function to go to the previous flashcard
  const prevFlashcard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(flashcardsData.length - 1);
    }
    resetState();
  };

  // Function to shuffle flashcards randomly
  const shuffleFlashcards = () => {
    setCurrentIndex(Math.floor(Math.random() * flashcardsData.length));
    resetState();
  };

  // Function to check the user's answer
  const checkAnswer = () => {
    if (
      userInput.trim().toLowerCase() ===
      flashcardsData[currentIndex].answer.toLowerCase()
    ) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect! Try again.");
    }
  };

  // Function to reset input and feedback
  const resetState = () => {
    setIsFlipped(false);
    setBgColor(getRandomColor());
    setUserInput("");
    setFeedback("");
  };

  return (
    <div className="flashcard-list">
      <h3>Number of Cards: {flashcardsData.length}</h3>

      <Flashcard
        question={flashcardsData[currentIndex].question}
        answer={flashcardsData[currentIndex].answer}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
        bgColor={bgColor}
      />

      {/* User Input Section */}
      <div className="user-input-section">
        <input
          type="text"
          className="answer-input"
          placeholder="Enter your answer"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="submit-btn" onClick={checkAnswer}>
          Submit
        </button>
        <button className="flip-btn" onClick={() => setIsFlipped(!isFlipped)}>
          Flip Card
        </button>
      </div>

      {/* Feedback */}
      {feedback && <p className="feedback">{feedback}</p>}

      {/* Buttons */}
      <div className="button-container">
        <button className="prev-btn" onClick={prevFlashcard}>
          Previous
        </button>
        <button className="next-btn" onClick={nextFlashcard}>
          Next
        </button>
        <button className="shuffle-btn" onClick={shuffleFlashcards}>
          Shuffle
        </button>
      </div>
    </div>
  );
};

export default FlashcardList;