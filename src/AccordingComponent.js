import React, { useState } from 'react';

export default function AccordingComponent({ title, info }) {
  let [show, setShow] = useState(false);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h6 className="mb-0" onClick={() => setShow(!show)}>
            {title}

            <button className="btn" onClick={() => setShow(!show)}>
              {show ? '-' : '+'}
            </button>
          </h6>
        </div>
        <div>{show && <p>{info}</p>}</div>
      </div>
    </>
  );
}
