import  { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CardProvider';

const Card = () => {
  const [products, setProducts] = useState([]);

  const {addToCart} = useContext(CartContext)



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
console.log(products)
  return (
    <div className='w-full m-10 flex flex-wrap items-center  gap-y-5'>
      {products.map(product => (
        <div className='border rounded-lg flex flex-col p-5 relative w-1/5 h-[350px] ml-10' key={product.id}>
        <div className='flex justify-center items-center'>
                <img className=' h-32 object-contain' src={product.image}/>
            </div>
          <h3 className='font-semibold text-sm items-center justify-center flex my-2'>{(product.title).substring(0,25)}</h3>
          <p className='text-xs opacity-70 justify-center items-center flex my-2 '>{(product.description).substring(0,45)}...</p>
          <p className='font-bold flex justify-center items-center'>Fiyat: {product.price} TL</p>
         <button onClick={()=>addToCart(product)} className='font-bold bg-indigo-400 text-white cursor-pointer p-3 rounded-lg absolute bottom-5'>Sepete Ekle</button> 
        </div>
      ))}
    </div>
  );
};

export default Card;
