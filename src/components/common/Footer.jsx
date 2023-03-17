import React from 'react';
import "../../css/footer.css"
import {BsFacebook, BsTwitter, BsInstagram  } from "react-icons/bs";
import Logo from "../common/img/LOGO VIKINGOS.png"
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <article className='sectionFooter'>
                <Link to="/" className='centrado '><img src={Logo} alt="Logo" className='logo' /></Link>
                <div>
                    <aside >
                        <h3 className=' centrado'>Contactos</h3>
                        <ul>
                            <li>011-222-5784</li>
                            <li>vikingos.birra@gmail.com</li>
                            <li><Link to="/nosotros" className='nosotros-a'>Nosotros</Link></li>
                        </ul>
                    </aside>
                </div>
                <div>
                    <h3 className=' centrado'>Seguinos</h3>
              <BsFacebook className='iconRedes1'></BsFacebook>
              <BsTwitter className='iconRedes'></BsTwitter>
              <BsInstagram className='iconRedes'></BsInstagram>
                </div>
            </article>
            <div  className='pieFooter'>
            <p className='p-footer pt-3'>&copy; Todos los derechos reservados</p>

            </div>
            
        </div>
    );
};

export default Footer;