import { useContext } from "react";
import { CartContext } from "../context/CardProvider";

const CardDetail = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);
    return (
      <div className="p-28 ">
        <span className="flex items-center justify-center font-semibold text-2xl my-5 tracking-wider">SEPETİM</span>
        {cartItems.map((item, index) => (
          <div  key={`${item.image}-${index}`}>
            <div className="flex  justify-between gap-5  items-center mt-10 " >
              <img className="w-1/12" src={item.image} />
             
              <div className="w-1/3">
                <div ><span className="text-lg font-bold">Marka:</span> <span className="text-sm">{item.title}</span></div>
                <div ><span className="text-lg font-bold">Kategoti: </span><span className="text-sm">{item.category}</span></div>
                <div> <span className="text-lg font-bold">Stock: </span><span className="text-sm">{item.rating.count}</span></div>
                <div ><span className="text-lg font-bold">Değerlendirme: </span><span className="text-sm">{item.rating.rate}</span></div>
              </div>
              <div >
                <div className=" mb-16 mx-10">
                    <span className="text-lg font-bold">Fiyat: </span><span className="font-semibold text-xl">{item.price}</span></div>
                <button
              className="w-full"
                onClick={() => removeFromCart(item.id)} >
                <span className="bg-red-600 text-white font-semibold px-20 py-1 rounded-lg border-none ">Sil</span>
              </button>
                </div>
              </div>
            <div className="w-full border my-5"></div>
            </div>
        ))}
      </div>
    );
  };
export default CardDetail;
