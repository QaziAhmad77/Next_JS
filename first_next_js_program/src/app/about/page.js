import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/about/aboutstudent">Go to About Page for Student</Link>
      <br />
      <Link href="/about/aboutcollege">Go to About Page for College</Link>
      <br />
      <Link href="/">Go to home page</Link>
    </div>
  );
};

export default About;
