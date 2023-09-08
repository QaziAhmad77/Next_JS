"use client"
import React, { useState } from 'react';
import style from '@/style/style.module.css';

const Styles = () => {
  const [color, setColor] = useState('red');
  const {blue}=style;
  return (
    <div>
      <h2 className={color == 'red' ? style.red : style.green}>
        Style Practice
      </h2>
      <h2 style={{backgroundColor:color=="red"?"red":"green"}}>Heading 2</h2>
      <h3 id={style.orange}>Heading 3</h3>
      <h4 className={blue}>Heading 4</h4>
      <h4 className={blue}>Heading 4</h4>
      <h4 className={blue}>Heading 4</h4>
      <h4 className={blue}>Heading 4</h4>
      <button onClick={() => setColor('green')}>Update Color</button>
    </div>
  );
};

export default Styles;
