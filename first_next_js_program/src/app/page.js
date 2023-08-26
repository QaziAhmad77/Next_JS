'use client';
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [programmer, setProgrammer] = useState('MERN Stack Developer');
  const handleClick = () => {
    setProgrammer('Full Stack Engineer');
  };
  useEffect(() => {
    alert("Hello I'm alert");
  }, []);
  const InnerComponent = () => {
    return <h1>This is Inner Component</h1>;
  };
  return (
    <main className={styles.main}>
      <Name name="Qazi Ahmad" />
      <button onClick={handleClick}>Click me </button>
      <h1>I'm {programmer}</h1>
      {InnerComponent()}
    </main>
  );
}

export const Name = ({ name }) => {
  return <h1 className={styles.discription}>My name is {name}</h1>;
};
