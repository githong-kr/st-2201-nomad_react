import Button from './Button';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <h1>Hello : {counter}</h1>
      <Button text={`Click`} onClick={onClick} />
    </div>
  );
}

export default App;
