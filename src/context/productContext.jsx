import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

//* 1.Adım: Context yapısının temelini createContxt(); kullanarak oluştururuz.
export const ProductContext = createContext();

//* 2.Adım: Verileri bileşenlere aktaracak olan sağlayıcıyı ve onun tuttuğu verileri tanımlar.
export function ProductProvider({children}){
  const [products,setProducts] = useState();

const [selectedCategory, setSelectedCategory] = useState("all");




  useEffect(()=> {
    //*Gösterilecek olan kategorinin verisi
const url = 
selectedCategory === "all"
 ? "products" 
 : `/products/category/${selectedCategory}`;


    api.get("products").then((res) => setProducts(res.data));
  }, [selectedCategory]);

//* 3.adım: sağlayıcı fonskyionları mutlaka provider'ı return etmeli ve App'i sarmalamılıdır
//* value olarak props göndermemiz gerekir.
  return (
    <ProductContext.Provider value={{products, setSelectedCategory, selectedCategory}}
    >
      {children}
      </ProductContext.Provider>
  );
}
