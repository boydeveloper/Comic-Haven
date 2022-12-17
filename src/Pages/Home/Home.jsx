import {
  Hero,
  Explore,
  Featured,
  Publishers,
  Quotes,
  Events,
} from './containers/Routes/index';

function Home() {
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
