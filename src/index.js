import React, { useState } from 'react';

import ReactDOM from 'react-dom/client';
import StarRating from './components/StarRating';
// import './index.css';
// import App from './App';

function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating
        color='blue'
        size={24}
        defaultRating={3}
        onSetRating={setRating}
      />
      <p>This movie is {rating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['terrible', 'bad', 'okay', 'good', 'great']}
    />
    <StarRating
      size={24}
      defaultRating={3}
      color='red'
      className='test'
    />
    <Test />
  </React.StrictMode>
);
