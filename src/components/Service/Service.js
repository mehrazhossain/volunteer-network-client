import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = ({ service }) => {
  const { _id, name, image } = service;

  return (
    <div className="col">
      <div className="card rounded-top border-0">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-footer service-div">
          <Link
            to={`/service/${_id}`}
            className="text-white d-flex align-items-center justify-content-center fs-6 service-title"
          >
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
