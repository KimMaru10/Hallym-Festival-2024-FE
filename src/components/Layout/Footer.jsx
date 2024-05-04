import React from 'react'
import "./Footer.scss";

const Footer = ({string}) => {

    
  return (
    <footer className='footer'>
        <div>{string}</div>
    </footer>
  )
}
export default Footer;