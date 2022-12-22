import './Offline.css';
import { useEffect } from 'react';
import skull from '../../assets/imgs/skull.svg';
function Offline() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="offline">
      <img src={skull} alt="skull" />
      <h1>
        Oops, Seems you're currently offline. Please check your internet
        connection and try again.
      </h1>
    </div>
  );
}

export default Offline;
