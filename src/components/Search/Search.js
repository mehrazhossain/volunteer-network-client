import React from 'react';

const Search = () => {
  return (
    <div className="mb-4">
      <h3 className="text-center mt-5">I GROW BY HELPING PEOPLE IN NEED.</h3>
      <div className="input-group mb-3 w-50 mx-auto mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search....."
          aria-label="Search....."
          aria-describedby="basic-addon2"
        />
        <span
          className="input-group-text bg-primary text-white"
          id="basic-addon2"
        >
          Search
        </span>
      </div>
    </div>
  );
};

export default Search;
