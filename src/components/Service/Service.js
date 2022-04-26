import React from 'react';
import './service.css';
const Service = ({ service }) => {
  const { id, name, image } = service;
  return (
    <div class="col">
      <div class="card img-fluid">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-footer service-title">
          <p class="text-white d-flex align-items-center justify-content-center">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
