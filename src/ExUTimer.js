import React, { useState } from 'react';

export default function ExUTimer() {
  let Clock = new Date().toLocaleTimeString();
  let [Time, setCtime] = useState(Clock);

  let UpdateTime = () => {
    Clock = new Date().toLocaleTimeString();
    setCtime(Clock);
  };
  //

  setInterval(UpdateTime, 1000);

  return (
    <>
      <div className="container">
        <div className="row">
          <h6>Digital Clock </h6>

          <div className="col-6">
            <h1>{Clock}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
