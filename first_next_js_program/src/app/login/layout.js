'use client';
import Link from 'next/link';
import './login.css';
import { usePathname } from 'next/navigation';

const layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <div>
      <ul className="login-menu">
        {pathName === '/login/loginteacher' ? (
          <>
            <li>
              <h4>Login Navbar</h4>
            </li>
            <li>
              <Link href="/login">Login Main</Link>
            </li>
            <li>
              <Link href="/login/loginstudent">Student Login</Link>
            </li>
          </>
        ) : pathName === '/login' ? (
          <>
            <li>
              <h4>Login Navbar</h4>
            </li>
            <li>
              <Link href="/login/loginstudent">Student Login</Link>
            </li>
            <li>
              <Link href="/login/loginteacher">Teacher Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <h4>Login Navbar</h4>
            </li>
            <li>
              <Link href="/login">Login Main</Link>
            </li>
            <li>
              <Link href="/login/loginteacher">Teacher Login</Link>
            </li>
          </>
        )}
      </ul>
      {children}
    </div>
  );
};

export default layout;
