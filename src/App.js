import { useState, useEffect } from 'react';

function Hello() {
  useEffect(() => {
    console.log(`Hello Component Created!`);
    return () => {
      console.log(`Hello Component Destroyed!`);
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing === true ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'HIDE' : 'SHOW'}</button>
    </div>
  );
}

export default App;
