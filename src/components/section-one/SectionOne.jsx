import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './SectionOne.scss';
export default function SectionOne({ sectionOne }) {
  return (
    <section id="section-one" className="mt-2">
      {sectionOne && <SectionOneImage sectionOne={sectionOne} />}
    </section>
  );
}

function SectionOneImage({ sectionOne }) {
  return sectionOne.map((image, index) => {
    return (
      <div className="post" key={index}>
        <div className="card-content" style={{ backgroundImage: `url(${image.img}) ` }}>
          <div className="card-all">
            <span className="card-eye">
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className="card-title">{image.title}</span>
            <span className="card-border"> </span>
          </div>
        </div>
      </div>
    );
  });
}
