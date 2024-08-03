import { useContext } from "react"
import { BasketContext } from "../context/basketContext"
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";




const BasketPage = () => {

  const {basket} = useContext(BasketContext);
//* TOPLAM ÜRÜN SAYISI
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
//* Toplam ÜCRET
  const totalPrice = basket.reduce((total,i) =>total + i.amount * i.price ,0)

  return (
 <div className="mt-5 p-2">
  <h1>SEPET</h1>

  <div className="row">
    <div className="col-lg-8">
        <div>
          {basket.length === 0 ? (
            <div className="text-center">
              <p>Öncelikle Sepete bir ürün ekle</p>
              <Link className="btn btn-primary" to={"/"}>
              Ürünlere Git</Link>
            </div>
          ) : (
            basket.map((product)=>
               <BasketItem key={product.id} product={product}/>)
          )}
        </div>
    </div>
    <div className="col-lg-5"></div>
    <h3>Toplam ürün sayısı: <span className="text-warning">{totalAmount}</span></h3>
    <h3>Toplam fiyat: <span className="text-warning">{totalPrice.toFixed(2)}$</span></h3>
    <form className="d-flex mt-4 gap-2">
      <input type="text" className="form-control" placeholder="promosyon kodu" />
      <button className="btn btn-warning">Uygula</button>
    </form>
  </div>
 </div>

 
  );
};

export default BasketPage
