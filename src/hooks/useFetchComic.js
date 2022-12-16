import { useEffect, useState } from 'react';

function useFetchComic(path) {
  const [pending, setPending] = useState(true);
  const [comics, setComics] = useState(null);

  useEffect(() => {
    async function getComics() {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}${path}?ts=1&apikey=${
          import.meta.env.VITE_PUBLIC_KEY
        }&hash=${import.meta.env.VITE_MD5_HASH}`
      );

      const {
        data: { results },
      } = await res.json();
      if (results) {
        setPending(false);
        setComics(results);
      }
    }
    getComics();
  }, []);

  return { comics, pending };
}

export default useFetchComic;
