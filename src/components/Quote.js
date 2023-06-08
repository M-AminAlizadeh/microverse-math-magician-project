import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});
  // Fetch data
  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=age', {
      method: 'GET',
      contentType: 'application/json',
      headers: { 'X-Api-Key': 'cwd7G46iynGqOEQ1g+zBbw==5ezDbVZRFlCVb0uD' },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setQuote(data[0]);
      });
  }, []);

  return (
    <div className='quote-container'>
      <div className='quote-content'>{quote.quote}</div>
      <div className='quote-bottom-row'>
        <button className='quote-category'>{quote.category}</button>
        <div className='quote-author'>{quote.author}</div>
      </div>
    </div>
  );
};

export default Quote;
