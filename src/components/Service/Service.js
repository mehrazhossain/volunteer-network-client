import React from 'react';
import './service.css';
const Service = ({ service }) => {
  const { id, name, image } = service;
  return (
    <div className="col">
      <div className="card rounded-top border-0">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-footer service-title">
          <p className="text-white d-flex align-items-center justify-content-center fs-6">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
