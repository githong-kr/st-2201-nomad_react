import Button from './Button';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setCounter((prev) => prev + 1);

  console.log(`i run all the time`);

  useEffect(() => console.log(`i run only once`), []);

  useEffect(() => console.log(`i run when counter changed`), [counter]);

  useEffect(() => console.log(`i run when keyword changed`), [keyword]);

  useEffect(
    () => console.log(`i run when counter or keyword changed`),
    [counter, keyword]
  );

  return (
    <div>
      <input onChange={onChange} type="text" value={keyword}></input>
      <h1>Hello : {counter}</h1>
      <Button text={`Click`} onClick={onClick} />
    </div>
  );
}

export default App;
