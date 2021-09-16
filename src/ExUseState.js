import React, { useState } from 'react';

export default function ExUseState() {
  let [no, setNo] = useState(0);
  let [err, setErr] = useState('');

  function Incerement() {
    setNo(no + 1);
    setErr('');
  }

  function Decerement() {
    if (no == 0) {
      setNo(0);
      setErr("You Can't put Minus Value");
    } else {
      setNo(no - 1);
    }
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
          <div className="col-4">
            <span>{err}</span>
          </div>
        </div>
      </div>
    </>
  );
}
