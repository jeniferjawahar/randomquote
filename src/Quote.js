import { useEffect, useState } from "react";

import { FaFacebook, FaQuoteLeft, FaTwitter } from "react-icons/fa";

import "./Quote.css";

const defaultQuote = {
  content: "loading...",
  author: "loading...",
};

const colors = [
  "color0",
  "color1",
  "color2",
  "color3",
  "color4",
  "color5",
  "color6",
  "color7",
  "color8",
  "color9",
  "color10",
  "color11",
];

export default function Quote() {
  const [quote, setQuote] = useState(defaultQuote);
  const random = Math.floor(Math.random() * 10);
  console.log(colors[random]);

  // get quote from API call
  function getRandomQuote() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote);
      })
      .catch(console.log);
  }

  // on Click
  function handleClick() {
    getRandomQuote();
  }

  // first time load
  useEffect(getRandomQuote, []);

  return (
    <>
      <div className={`${colors[random]} wrapper-box`} id="quote-box">
        <div className="content-box">
          <p className={`${colors[random]} quoteText `}>
            <FaQuoteLeft /> {" " + quote.content}
          </p>
          <p className={`${colors[random]} authorText `}>-{quote.author}</p>

          <div className="buttons">
            <a
              className={`${colors[random]} socialmediabutton`}
              href={`http://twitter.com/share?text=${quote.content} goes here&hashtags=quote,positive,motivation`}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              className={`${colors[random]} socialmediabutton`}
              href={`http://facebook.com/share?text=${quote.content} goes here&hashtags=quote,positive,motivation`}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="icon" />
            </a>

            <button
              onClick={handleClick}
              className={`${colors[random]} button`}
              id="item3"
            >
              New Quote
            </button>
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}
