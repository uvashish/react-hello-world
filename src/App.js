import React, { useState, useEffect } from "react";

function App() {

  const [advice, setAdvice] = useState(null);
  
   async function fetchAdvice(){
       // GET request using fetch with async/await
       const response = await fetch("https://api.adviceslip.com/advice");
       const data = await response.json();
       setAdvice(data.slip.advice);
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
      .catch( error => console.log(error));
  }, []);

  return (
    <div>
      <h1>{advice} </h1>
      <button onClick={fetchAdvice}>Get Advice</button>
    </div>
  );
}

export default App;
