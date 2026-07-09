import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 border-bottom mb-5'>
            <div className='row text-center mt-5 p-5'>
                <h2 className='mb-3 fs-3'>Zerodha Products</h2>
                <h3 className='mb-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
                <p>Check out our <a style={{ textDecoration: "none" }} href='' >See pricing <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;