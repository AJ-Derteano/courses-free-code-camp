import CardPhrase from './components/CardPhrase/CardPhrase';

import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  const getQuote = async () => {
    const __getRandomQuote = (min, max) => Math.floor(Math.random(min, max) * max)

    const request = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const { quotes } = await request.json();
    let { quote, author } = quotes[__getRandomQuote(0, quotes.length)]
    setAuthor(author)
    setQuote(quote)
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="App">
      <CardPhrase getQuote={getQuote} quote={quote} author={author} />
    </div>
  );
}

export default App;
