import React from 'react';

function Universe() {
    return (

        <div className='container text-center mt-5'>
            <div className='row mb-5'>
                <h4>Want to know more about our technology stack? Check out the <a style={{ textDecoration: "none" }} href="">Zerodha.tech </a>blog.</h4>
            </div>
            <div className='row mb-5 '>
                <h2 className='mb-4'>The Zerodha Universe</h2>
                <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row mt-5 text-muted'>
                <div className='col-2'>

                </div>

                <div className='col text-center mb-2 p-2'>
                    <img src='media/images/zerodhaFundhouse.png' style={{ width: "10rem" }}></img>
                    <p>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className='col text-center mb-2 p-2'>
                    <img src='media/images/smallcaseLogo.png' style={{ width: "10rem" }}></img>
                    <p>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col text-center mb-2 p-2'>
                    <img src='media/images/dittoLogo.png' style={{ width: "8rem" }}></img>
                    <p>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
                <div className='col-2'></div>
            </div>
            <div className='row mt-5 text-muted '>
                <div className='col-2'>

                </div>

                <div className='col text-center mb-2 p-2'>
                    <img src='media/images/sensibullLogo.svg' style={{ width: "12rem" }}></img>
                    <p>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col text-center mb-2 p-2'>
                    <img src='media/images/tijori.svg' style={{ width: "10rem" }}></img>
                    <p>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>
                <div className='col text-center mb-2 p-2'>
                    <img src='media/images/streakLogo.png' style={{ width: "10rem" }}></img>
                    <p>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className='col-2'></div>
            </div>
            <button className=" p-2 fs-5 btn btn-primary" style={{ width: "20%", margin: "0 auto" }}>Signup Now</button>
        </div>
    );
}

export default Universe;