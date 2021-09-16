import React, { useState } from 'react';

export default function App() {
  const [name, SetName] = useState();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>hi {name} </h1>
          </div>
        </div>
      </div>
    </>
  );
}
