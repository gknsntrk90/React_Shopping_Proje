import { useState } from "react"
import Login from "./LoginModal";
import LoginModal from "./LoginModal";
import ThemeModal from "./ThemeModal";
import WarningModal from "./WarningModal";
import Modal from "./Modal";


const App = () => {

    const [isOpen, setIsopen] = useState(null);

    const close = () => setIsopen(null);

  return (
    <div className="p-5">
      <div className="d-flex justfiy-content-center gap-4 my-4">
        <button className="bg-danger" onClick={()=> setIsopen("login")}>
            Giriş yap</button>
        <button className="bg-warning" onClick={()=>setIsopen("darkmode")}>Tema seç</button>
        <button className="bg-primary" onClick={() => setIsopen("warning")}>Uyarı fırlat</button>
      </div>

{/*
* 1.Yol
> Normal componentler oluşturduk.
> Amacımıza ulaştık.
> çok Fazla kod tekrarı oldu
*/}
     
     {/* {isOpen === "login" ? (
        <LoginModal close={() => setIsopen(false)} />
     ) : isOpen === "darkmode" ? (
        <ThemeModal close={() => setIsopen(false)}/>
     ) : isOpen==="warning" ? ( <WarningModal close={() => setIsopen(false)}/>
    ) : (
""
    )} */}



{/*
2. Yol
> Kod tekrarı önlemek için HOC kullandık.
*/}
    {isOpen === "login" ? (
      <Modal close={close}>
        <Login />
        </Modal>
    ) : isOpen === "darkmode" ? (
      <Modal close={close}>
        <h2>Zevkinize uygun temayı seçiniz</h2>
    <select className='form-select my-4'>
        <option>Koyu</option>
        <option>Açık</option>
        <option>Kırmızı</option>
        <option>Mavi</option>
    </select>
      </Modal>
    ) : isOpen === "warning" ? (
      <Modal close={close}>
        <h2>İşlem başarısız oldu</h2>
<p>yapılan veri çekme isteği 404 kod ile hata oluşturdu</p>
<p>Lütfen tekrar deneyiniz</p>
      </Modal>
    ) : ""}

</div>
    
  );
};

export default App;
