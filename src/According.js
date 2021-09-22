import React, { useState } from 'react';

import AccordingQuestion from './AccordingQuestion';
import AccordingComponent from './AccordingComponent';

export default function According() {
  let [data, setData] = useState(AccordingQuestion);
  let [show, setShow] = useState(false);

  return (
    <>
      <div className="container">
        <h3>According Example</h3>
        <section className="info">
          {data.map((question) => (
            <AccordingComponent key={question.id} {...question} />
          ))}
        </section>
      </div>
    </>
  );
}
