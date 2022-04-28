import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  const handleUpdateForm = (e) => {
    e.preventDefault();

    const newName = e.target.name.value;
    const newURL = e.target.image.value;
    console.log(newName, newURL);

    const updatedInfo = { newName, newURL };
  };

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return (
    <div className="container text-center">
      <h2>you're updating '{service.name}' service.</h2>
      <h2 className="text-success">Update your info</h2>
      <form onSubmit={handleUpdateForm}>
        <input
          className="mb-2"
          type="text"
          name="name"
          placeholder="Change name"
          autoComplete="off"
        />{' '}
        <br />
        <input
          className="mb-2"
          type="text"
          name="image"
          placeholder="Change profile"
          autoComplete="off"
        />{' '}
        <br />
        <input className="btn btn-success" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default ServiceDetail;
