import React from 'react'

const WarningModal = ({close}) => {
  return (
    <div className='modal d-block bg-black bg-opacity-50'>
    <div className='modal-dialog'>
<div className='modal-content'>
    <div className='modal-header'>
        <button type='button' onClick={close} className='btn-close'></button>
    </div>

<div className='modal-body text-dark'>
<h2>İşlem başarısız oldu</h2>
<p>yapılan veri çekme isteği 404 kod ile hata oluşturdu</p>
<p>Lütfen tekrar deneyiniz</p>
</div>


<div className='modal-footer'>
<button onClick={close} className='btn btn-secondary'>Kapat</button>
<button onClick={close} className='btn btn-primary'>Onayla</button>
</div>
</div>
    </div>

</div>
  )
}

export default WarningModal
