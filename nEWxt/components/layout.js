import { inViewHandler, setActiveClass } from '../helpers/helpers';
import React, { useEffect } from 'react'

 const Layout = (props) =>  {
  
  useEffect(() => {
    inViewHandler() 
    setActiveClass()
  }, [])
  return (
    <div data-inviewanimation className="page-layout">
        {props.children}
        <link rel="stylesheet" href="app.module.css"></link>
      </div>
    )
  }
  
  export default Layout