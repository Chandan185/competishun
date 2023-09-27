import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default Loader;
