import { useState } from 'react';
import 'animate.css';

export default function BouncyButton({ children }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    setTimeout(() => {
        setClicked(false);
      }, 4000);
  }

  return (
    <button
      className={`btn ${clicked ? 'animate__animated animate__hinge' : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
