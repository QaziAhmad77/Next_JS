'use client';
import Link from 'next/link';
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  const [programmer, setProgrammer] = useState('MERN Stack Developer');
  const handleClick = () => {
    setProgrammer('Full Stack Engineer');
  };
  useEffect(() => {
    // alert("Hello I'm alert");
    console.log("Hello")
  }, []);
  const InnerComponent = () => {
    return <h1>This is Inner Component Hello </h1>;
  };
  return (
    <main className={styles.main}>
      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to about us page</Link>
      <button onClick={() => navigate('/login')}>Go to Login Page</button>
      <button onClick={() => navigate('/about')}>Go to About Page</button>
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
