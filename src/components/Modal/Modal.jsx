import React, { useContext } from 'react'

import './Modal.scss'

import UiContext from '../../UiContext'
// import { CloseIcon } from '@/assets/icons'

const Modal = () => {
  const { modal: Component, closeModal } = useContext( UiContext )

  if ( !Component ) {
    return null
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='close-btn' onClick={ closeModal }>
          <span>X</span>
        </div>
        <Component />
      </div>
    </div>
  )
}

export default Modal
