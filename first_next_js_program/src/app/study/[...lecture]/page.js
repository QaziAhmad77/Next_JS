'use client';
import React from 'react';

const Lecture = ({ params }) => {
  console.log(params, 'params');
  return (
    <div>
      <h1>Day {params.lecture[0]} of week</h1>
      <h1>Lecture {params.lecture[1]}</h1>
    </div>
  );
};

export default Lecture;
