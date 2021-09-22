import React, { useState } from 'react';

import AccordingQuestion from './AccordingQuestion';

export default function According() {
  let [data, setData] = useState(AccordingQuestion);
  let [show, setShow] = useState(false);

  const Open = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <div className="container">
        {data.map((items, index) => (
          <div className="container">
            <div className="accordion">
              <div className="card">
                <div className="card-header">
                  <h2 className="mb-0">
                    <button type="button" className="btn" onClick={Open}>
                      <i>{!show ? '+' : '-'}</i> {items.title}
                    </button>
                  </h2>
                </div>

                <div className={!show ? 'collapse' : ''}>
                  <div className="card-body">
                    <p>{items.info}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
