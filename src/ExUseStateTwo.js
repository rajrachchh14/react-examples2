import React, { useState } from 'react';

export default function ExUseStateTwo() {
  const [Formdata, SetFormData] = useState({
    fname: '',
    lname: '',
  });

  const InputEvent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    // const value = e.target.value;
    // const name = e.target.name;

    const { value, name } = e.target;

    // It Store Also Old Value
    SetFormData((PrevVal) => {
      if (name === 'fname') {
        return {
          fname: value,
          lname: PrevVal.lname,
        };
      } else if (name === 'lname') {
        return {
          fname: PrevVal.fname,
          lname: value,
        };
      }
    });
  };

  const SubmitData = (e) => {
    e.preventDefault();
    console.log(Formdata.fname);
    console.log(Formdata.lname);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h6 className="text-center">Use State Multiple Use in Form </h6>
          <p className="text-center">
            {/* {Formdata.fname} {Formdata.lname} */}
          </p>
          <form onSubmit={SubmitData}>
            <div className="col-12">
              <input
                placeholder="Enter First Name"
                className="form-control"
                type="text"
                name="fname"
                value={Formdata.fname}
                onChange={InputEvent}
              />
            </div>
            <br />

            <div className="col-12">
              <input
                placeholder="Enter Last Name"
                className="form-control"
                type="text"
                name="lname"
                value={Formdata.lname}
                onChange={InputEvent}
              />
            </div>
            <br />

            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
