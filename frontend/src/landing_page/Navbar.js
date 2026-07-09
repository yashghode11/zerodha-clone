import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg border-bottom  " style={{ backgroundColor: "#FFF" }}>
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">
                <img src='media/images/logo.svg' alt='logo Zerodha' style={{ width: "25%" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>
                         <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/login"><button className='btn btn-primary'>Login</button></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/about">About</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" to="/product">Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/support">Support</Link>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#"><i class="fa-solid fa-bars"></i></a>

                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;