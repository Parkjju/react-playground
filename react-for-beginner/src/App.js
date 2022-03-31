import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('Rendered!');
  const runOnlyOnce = () => {
    console.log('Run only once!');
  };
  useEffect(runOnlyOnce, []);
  return (
    <div>
      <input
        value={keyword}
        type='text'
        onChange={onChange}
        placeholder='Search here...'
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
