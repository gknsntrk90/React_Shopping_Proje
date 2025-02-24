//* Context yapılarına abone olmamızı sağlayan hook
import { useContext } from "react"
import { ProductContext } from "../context/productContext"
import { BiLoader } from "react-icons/bi";
import Loader from "../components/Loader";
import Card from "../components/Card";



const MainPage = () => {

    //* Ürünler contextine abone ol
   const {products,selectedCategory} = useContext(ProductContext);
   


  return (
    <div className="container my-5">
      <h1>{selectedCategory}</h1>

      <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-5 mt-5">
        {!products ? <Loader /> : (
        products.map((item)=> <Card key={item.id} product={item}/>)
      )}</div>
    </div>
  )
}

export default MainPage
