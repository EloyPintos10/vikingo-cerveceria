import React from 'react';
import "../../css/footer.css"
import {BsFacebook, BsTwitter, BsInstagram  } from "react-icons/bs";
import Logo from "../common/img/LOGO VIKINGOS.png"

const Footer = () => {
    return (
        <div>
            <article className='sectionFooter'>
                <div><img src={Logo} alt="Logo" className='logo' /></div>
                <div>
                    <aside >
                        <h3>Contactos</h3>
                        <ul>
                            <li>011-222-5784</li>
                            <li>vikingos.birra@gmail.com</li>
                            <li><a href="#" className='nosotros-a'>Nosotros</a></li>
                        </ul>
                    </aside>
                </div>
                <div>
                    <h3>Seguinos</h3>
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