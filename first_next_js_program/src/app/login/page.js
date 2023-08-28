"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const navigateion = (name)=>{
    router.push(name)
  }
  return (
    <div>
      <h1 className='heading'>Login Page</h1>
      <Link href="/">Go to home page</Link>
      <br />
      <button onClick={()=>navigateion("/login/loginstudent")}>Go to Student Login Page</button>
      <br />
      <button onClick={()=>navigateion("/login/loginteacher")}>Go to Student Login Page</button>
    </div>
  );
};

export default Login;
