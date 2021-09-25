import React, { useEffect, useState } from 'react';

export default function UseEffectEx() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('click');
  }, []);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
