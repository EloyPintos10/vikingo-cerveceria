import React from 'react';
import Error from "../common/img/error404.jpg"
import "../../css/error.css"
const Error404 = () => {
    return (
        <div className='text-center '>
            <img src={Error} alt="Error 404" className='imgError' />
        </div>
    );
};

export default Error404;