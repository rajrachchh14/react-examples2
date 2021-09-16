import React, { useState } from 'react';

export default function ExUseState() {
  let [no, setNo] = useState(0);

  function Incerement() {
    setNo(no + 1);
  }

  function Decerement() {
    setNo(no - 1);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <h6>Incerement / Decerement Example</h6>
          <h1>{no}</h1>
          <div className="col-4">
            <button className="btn btn-sm btn-dark" onClick={Incerement}>
              Incerement
            </button>
          </div>

          <div className="col-4">
            <button className="btn btn-sm btn-dark" onClick={Decerement}>
              Decerement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
