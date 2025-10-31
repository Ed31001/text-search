import { useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox';

interface Article {
    id: number;
    title: string;
    content: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "React is a powerful UI library",
    content: "React makes it painless to create interactive UIs. Design simple views for each state in your application. Then, use state and lifecycle methods to respond to user events and update the UI."
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    content: "TypeScript extends JavaScript by adding types, which can help catch errors early and improve code quality. It is a superset of JavaScript that compiles to plain JavaScript."
  },
  {
    id: 3,
    title: "Vite makes development fast",
    content: "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It leverages native ES modules and provides lightning-fast hot module replacement."
  },
  {
    id: 4,
    title: "Getting started with Tailwind CSS",
    content: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. It allows for rapid UI development with a focus on responsiveness and flexibility."
  },
  {
    id: 5,
    title: "State Management in React",
    content: "Managing state in React can be done using built-in hooks like useState and useReducer, or through external libraries like Redux and MobX. Proper state management is crucial for building scalable applications."
  },
  {
    id: 6,
    title: "Building a RESTful API with Express",
    content: "Express.js is a minimal and flexible framework for building web applications and APIs. It provides a robust set of features for handling HTTP requests, routing, middleware, and more."
  },
  {
    id: 7,
    title: "Introduction to GraphQL",
    content: "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It allows clients to request exactly the data they need, making it more efficient than traditional REST APIs."
  }
];

function App() {
  const [query, setQuery] = useState("");

  const filtered = articles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) || 
    article.content.toLowerCase().includes(query.toLowerCase())
  );

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) => 
      regex.test(part) ? ( <mark key={index} className="bg-yellow-300">{part}</mark> ) : ( part )
    );
  };

  return (
    <div className="app-container">
      <h1>Search</h1>
      <SearchBox query={query} setQuery={setQuery} />
      <div className="results">
        {filtered.length === 0 ? (
          <p className="posts">0 posts found.</p>
        ) : (
          <>
            <p className="posts">
              {filtered.length} post{filtered.length !== 1 ? 's' : ''} found.
            </p>
            {filtered.map(article => (
              <div key={article.id} className="article">
                <h2>
                  {highlightText(article.title, query)}
                </h2>
                <p>
                  {highlightText(article.content, query)}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default App
