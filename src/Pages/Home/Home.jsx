import { useEffect } from 'react';
import {
  Hero,
  Explore,
  Featured,
  Publishers,
  Quotes,
  Events,
} from './containers/Routes/index';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Hero />
      <main>
        <Explore />
        <Quotes />
        <Featured />
        <Publishers />
        <Events />
      </main>
    </>
  );
}

export default Home;
