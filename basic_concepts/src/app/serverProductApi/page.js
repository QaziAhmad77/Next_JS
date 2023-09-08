import Product from "./product"
async function productList(){
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products;
}
const serverProductApi = async() => {
    let products = await productList();
    console.log(products)
  return (
    <div>
      {
        products.map((item)=>(
            <div>
                <h3>Name: {item.title}</h3>
                <Product price={item.price}/>
            </div>
        ))
      }
    </div>
  )
}

export default serverProductApi
