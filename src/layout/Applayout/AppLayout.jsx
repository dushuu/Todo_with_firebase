import React from 'react'
import { Outlet } from 'react-router-dom'
import './Applayout.scss'
import classNames from 'classnames'

const AppLayout = () => {

  return (
    <div className='container'>
      <div className='heading-container'>
      <h2 className='heading'>{window.location.pathname.includes('/signup')? 'welcome to todo-list': 'Todo-list'}</h2>

      </div>
        <div className='section-container'>
            <div style={{ width:'50%', height:'100%'}}>
                <Outlet/>

            </div>
            <div className={classNames({
              'for-signup':window.location.pathname.includes('/signup'),
              'for-login':!window.location.pathname.includes('/signup')
            })}>
            </div>
        </div>
     </div>
  )
}

export default AppLayout