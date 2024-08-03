import React from 'react'

const LoginModal = ({close}) => {
  return (
    <div className='modal d-block bg-black bg-opacity-50'>
        <div className='modal-dialog'>
    <div className='modal-content'>
        <div className='modal-header'>
            <button type='button' onClick={close} className='btn-close'></button>
        </div>

<div className='modal-body text-dark'>
    <form action="">
        <div>
            <label>isim</label>
            <input type="text" className='form-control shadow' />
        </div>
        <div className='my-4'>
            <label>şifre</label>
            <input type="password" className='form-control shadow' />
        </div>
    </form>
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

export default LoginModal
