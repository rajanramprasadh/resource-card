import React from 'react';
import './style.scss';

export default function App() {
  return (
    <div>
      <div className="rc-standard">
        <div className="rc-standard__image">
          <img
            src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2-1024x649.png"
            alt="Landscape"
          />
        </div>
        <div className="rc-standard__label rc-standard__label--position">
          <div className="rc-standard__label-icon">ICO</div>
          <div className="rc-standard__label-title">RESEARCH</div>
        </div>
        <div className="rc-standard__text">Text</div>
      </div>
    </div>
  );
}
