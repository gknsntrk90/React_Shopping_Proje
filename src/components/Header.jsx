import { useContext, useEffect, useState } from "react";
import { FaShopify } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import api from "../utils/api";
import { ProductContext } from "../context/productContext";

const Header = () => {

    const [categories, setCategories] = useState();

    const {setSelectedCategory} = useContext(ProductContext);


    useEffect(() => {
        //*kategorilerin verilerini al
     api
     .get("/products/categories")
     .then((res) => setCategories(res.data))
     //* veri gelirse state'e aktar
     .catch((err) => console.log(err))
    }, []);




  return (
    <nav className="navbar navbar-dark bg-black navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand d-flex align-items-center gap-3" to={"/"}>
    <FaShopify className="fs-1 text-warning" /> Context Store
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to={"/"}>
            Home
            </NavLink>
        </li>
        <NavLink className="nav-link" aria-current="page" to={"/sepet"}>
            Sepet
            </NavLink>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategoriler
          </a>
          <ul className="dropdown-menu">
            <li>
                <button 
                onClick={() => setSelectedCategory("all")}
                 className="dropdown-item">
                    Hepsi
                    </button>
            </li>
            {categories?.map((category, i) => (
                <li key={i}>
                    <button
                     onClick={()=> setSelectedCategory(category)}
                      className="dropdown-item"
                      >
                        {category}
                        </button>
                </li>
            ))}
          </ul>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

export default Header
