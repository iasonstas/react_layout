import React from 'react';
import './Percentages.scss';

const colors = ['#00d9ff', '#0000ff', '#ffd400', '#d000ff'];

const Percentages = ({ sectionTwo }) => {
  return (
    <div>
      <div className="text-primary mb-2">{sectionTwo.title}</div>
      <h2 className="graph-text">{sectionTwo.graphText}</h2>
      {sectionTwo &&
        sectionTwo?.stats?.map((item, index) => {
          const { title, amount } = item;
          return (
            <div key={index}>
              <div className="d-flex mb-1">
                <div className="percent-text w-50 ">{title.toUpperCase()}</div>
                <div className="percent-text w-50 text-end">{amount / 10}%</div>
              </div>
              <div className="progress mb-2">
                <div
                  className="progress-bar percent-bars"
                  role="progressbar"
                  aria-valuenow={amount}
                  style={{
                    width: `${amount.toString().slice(0, 2)}%`,
                    background: `linear-gradient(90deg, #2f3535 0%, ${colors[index]} 100%)`
                  }}
                  aria-valuemin="0"
                  aria-valuemax="1000"
                >
                  <div
                    className="circle"
                    style={{
                      backgroundColor: `${colors[index]}`,
                      boxShadow: `0 0 0 0.6px ${colors[index]}, 0 0 0 3px white, 0 0 0 4px ${colors[index]}`
                    }}
                  >
                    <div className="circle-white"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Percentages;
