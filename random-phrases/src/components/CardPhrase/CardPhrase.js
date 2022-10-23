import svg__Quote from '../../img/quote-svgrepo-com.svg'
import './CardPhrase.css'

import { FaTwitter } from 'react-icons/fa';

export default function CardPhrase(props) {
  const { quote, author, getQuote } = props

  return (
    <div className='container_phrase'>
      <div id='quote-box' className='pharase'>
        <p id='text' className='quote'>
          <img className='comillas' src={svg__Quote} alt={author}></img>
          {quote}
        </p>
        <br />
        <p id='author' className='author'>-{author}</p>
        <div className='container__buttons'>
          <a id='tweet-quote' className='button' href='http://twitter.com/intent/tweet' target='_blank' rel="noreferrer">
            <FaTwitter />
          </a>
          <a id='tumblr-quote' className='button' href='#'>
            <FaTwitter />
          </a>
          <button id='new-quote' className='button' onClick={getQuote}>New Quote</button>
        </div>
      </div>
    </div>
  )
}