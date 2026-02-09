import React, { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/facts")
      .then(response => response.json())
      .then(data => {console.log("API Data:",data); setFacts(data)})
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Interesting Facts</h1>

        {facts.length === 0 ? (
          <p className="loading">Loading facts...</p>
        ) : (
          <ul className="facts-list">
            {facts.map((item) => (
              <li key={item.id} className="fact-item">
                {item.fact}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
