import { useState } from 'react'
import './App.css'
import { quotes as myQuotes } from './data/quotes'

function App() {
  const [index, setIndex] = useState(1)
  const [quotes, setQuotes] = useState(myQuotes)

const handleClick = () => {
  const random = Math.floor(Math.random() * quotes.length)
  setIndex(random)
}

  return (
    <div className="App">
      <h1>My Quote Machine</h1>
      <div id="quote-box" className="card">
        <div>
          <p id="text">{quotes[index].quote}</p>
          <span id="author">- {quotes[index].author}</span>
        </div>
        <div className="card-footer">
          <button onClick={handleClick}id="new-quote">Get New Quote</button>
          <a 
          href={`https://twitter.com/intent/tweet?text=${quotes[index].quote}-${quotes[index].author}`}
          id="tweet-quote" 
          target="_blank">Tweet this quote!</a>
        </div>
      </div>
    </div>
  )
}

export default App
