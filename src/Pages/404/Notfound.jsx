import { useEffect } from 'react';
import Error404 from '../../assets/imgs/404.svg';

function Notfound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="NotFound">
      <img src={Error404} alt={404} />
    </div>
  );
}

export default Notfound;
