import {
  Hero,
  Explore,
  Featured,
  Publishers,
  Quotes,
  NewsFeed,
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
        <NewsFeed />
      </main>
    </>
  );
}

export default Home;
