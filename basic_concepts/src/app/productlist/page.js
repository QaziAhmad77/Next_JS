'use client';
import { useEffect, useState } from 'react';
const Page = () => {
  const [backStyle,setBackStyle]=useState({backgroundColor:"green"})
  const [product, setProduct] = useState([]);
  console.log(product);
  const getData = async () => {
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    let { products } = data;
    setProduct(products);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div >
    <button onClick={()=>setBackStyle({backgroundColor:"red"})} style={backStyle}>This is button </button>
      <h1>Product List</h1>
      {product.map((item) => (
        <div key={item.id} className="border-b-2 border-red-400">
          <h3>{item.title}</h3>
          <h3>{item.description}</h3>
          <h3>{item.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Page;
