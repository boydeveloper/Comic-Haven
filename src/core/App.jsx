import RouterLinks from '../Routes/RouterLinks';
import { Offline } from '../Pages/index';
import { useEffect, useLayoutEffect } from 'react';
function App() {
  const onLine = window.navigator.onLine;
  return onLine ? <RouterLinks /> : <Offline />;
}

export default App;
