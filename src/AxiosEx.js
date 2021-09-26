import React, { useState } from 'react';

export default function AxiosEx() {
  const [num, SetNum] = useState();

  return (
    <>
      <div className="container">
        <h1>You Select {num} </h1>
        <div className="form-group">
          <label>Select </label>
          <select
            className="form-control"
            value={num}
            onChange={(e) => {
              SetNum(e.target.value);
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </>
  );
}
