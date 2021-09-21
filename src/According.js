import React from 'react';

export default function According() {
  return (
    <>
      <div className="container">
        <div className="accordion">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">
                <button type="button" className="btn ">
                  <i>+</i> What is HTML?
                </button>
              </h2>
            </div>
            <div className="collapse">
              <div className="card-body">
                <p>
                  HTML stands for HyperText Markup Language. HTML is the
                  standard markup language for describing the structure of web
                  pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
