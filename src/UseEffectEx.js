import React, { useEffect, useState } from 'react';

export default function UseEffectEx() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      see out put in title bar also
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
