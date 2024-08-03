import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

//* Contextin temelini oluşturur
export const BasketContext = createContext();

export const BasketProvider = ({children}) => {
    const [basket, setBasket] = useLocalStorage("sepet", []);


    const addToBasket = (newProduct) => {


        const found = basket.find(i=>i.id === newProduct.id);

        //* ürün sepette varsa miktarını 1 arttır.
        if(found){
            //*bulunan ürünün miktarını bir arttır
            const updated = {...found, amount: found.amount + 1 };
            //*sepet dizisindeki eski ürün yerine güncel halini koy
            const newBasket = basket.map((i)=> (i.id === updated.id ? updated : i));
            //*state'i güncelle
            setBasket(newBasket)

            toast.success(`ürün miktarı arttırıldı.(${updated.amount})`)
         } else{
            //*Ürün sepeete yoksa ürünün miktarın 1 olarak sepete ekle
               setBasket(basket.concat({ ...newProduct, amount: 1 }));
            };
        };

        //*sepetten ürün kaldıran fonksyon
        const removeFromBasket = (delete_id) => {
            //*silinecek ürünün dışarısında kalanla yeni bir dizi oluştur
            const filtred = basket.filter((i) =>i.id !== delete_id);
            //* state i güncelle
            setBasket(filtred);

            //*toast ile üstten yazı çıkartıyoruz uyarı şeklinde
            toast.error("ürün sepetten kaldırıldı")
        };

        const decreaseAmount = (delete_id) => {
            //*1 ADIM: miktarı azaltılacak olan ürünü sepet içerisinde bulabilmek için find kullandık
            const found = basket.find((i) =>i.id === delete_id);

            //* 2.ADIM: Miktar 1'den fazla ise miktarı 1 azalt
            if(found.amount > 1) {
                //* a) Elemanın güncel nesnesini oluştur
                const updated = { ...found, amount: found.amount - 1};
                //* b) dizideki elamnın eski hali yerine güncel halini koy.
                const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
                //* c) state'i güncelle
                setBasket(newBasket);

                toast.info(`ürün miktarı azaltıldı.(${updated.amount})`)
            }else{
                removeFromBasket(delete_id);
            }
        };
        
    

    return <BasketContext.Provider value={{addToBasket, basket, decreaseAmount, removeFromBasket}}>
        {children}
    </BasketContext.Provider>
};