'use client';
import Link from 'next/Link';
import custom from "./custom.module.css"
import other from "./other.module.css"
import outside from "@/style/outside.module.css"
export default function Home() {
  return (
    <div>
      <h1 className="text-red-500 text-center font-bold text-2xl">
        Fetch Data with API in Client Component
      </h1>
      <h1 className="text-red-500 text-center font-bold text-2xl">
        Fetch Data with API in Server Component
      </h1>
      <Link href="/productlist">Go to Client Product List</Link>
      <Link href="/serverProductApi" className="block">Go to Server Product List</Link>
      <br />
      <h2 className={custom.main}>CSS Modules and Global CSS</h2>
      <h2 className={other.main}>CSS Modules and Global CSS Heading 2</h2>
      <h2 className={outside.main}>CSS Modules and Global CSS Heading 3</h2>
    </div>
  );
}
