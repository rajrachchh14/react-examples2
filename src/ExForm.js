import React, { useState } from 'react';

export default function App() {
  let [OldName, SetOldName] = useState();
  let [NewName, SetNewName] = useState();

  const Submit = () => {
    SetNewName(OldName);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>hi {NewName} </h1>

            <input
              type="text"
              value={OldName}
              onChange={(e) => SetOldName(e.target.value)}
            />

            <button className="btn btn-success" onClick={Submit}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
