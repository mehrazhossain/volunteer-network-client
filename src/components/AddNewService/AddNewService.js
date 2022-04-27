import React from 'react';

const AddNewService = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const service = {
      name,
      image,
    };
    fetch('http://localhost:5000/service', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('success', data);
      });
  };
  return (
    <div className="container w-50 mx-auto">
      <h2>Please add new volunteer service</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Service name"
          autoComplete="off"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="imageUrl"
          autoComplete="off"
        />
        <br />
        <input type="submit" value={'Add New Service'} />
      </form>
    </div>
  );
};

export default AddNewService;
