import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function AxiosEx() {
  const [num, SetNum] = useState();
  const [name, SetName] = useState();
  const [description, SetDescription] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://apitesting78.000webhostapp.com/api/Item/${num}`
      );
      console.log(response);
      SetName(response.data.title);
      SetDescription(response.data.description);
      // return await res.json();
    }
    getData();
  });

  return (
    <>
      <div className="container">
        <h1>no : {num} </h1>
        <h1>Name : {name} </h1>
        <h1>description : {description} </h1>
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
