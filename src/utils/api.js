import axios from "axios";

//* axiosun ayarlarını bizim belirlediğimiz bir örneğini oluşturmaya yarar.
const api = axios.create({
    //*yapılacak olan bütün isteklerin başına baseURL içerisinde ki değişkeni aktaracktır
    baseURL: "https://fakestoreapi.com/",
    // timeout: 4000, //*belirlenen bir süre içinde isteye yanıt gelmezse axios otomatik olarak isteği iptal eder
    
});
export default api;