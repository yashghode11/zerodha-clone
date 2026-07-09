import React from 'react';


function Footer() {
    return (

        <div className='container mt-5 border-top p-5'>
            <div className='row mb-5 ' >
                <div className='col'>
                    <img src='media/images/logo.svg' style={{ width: "50%", paddingBottom: "30px" }} />
                    <p className='fs-15'>© 2010 - 2024, Not Zerodha Broking Ltd.<br />
                        All rights reserved.</p>
                </div>
                <div className='col' >
                    <p>Company</p>
                    <a href='' style={{ textDecoration: "none" }}>About</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Products</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Pricing</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Referral programme</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Careers</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Zerodha.tech</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Press & media</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Zerodha cares (CSR)</a>
                    <br />
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href='' style={{ textDecoration: "none" }}>Contact</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Support portal</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Z-Connect blog</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>List of charges</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Downloads & resources</a>
                    <br />

                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href='' style={{ textDecoration: "none" }}>Open an account</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>Fund transfer</a>
                    <br />
                    <a href='' style={{ textDecoration: "none" }}>60 day challenge</a>
                    <br />

                </div>

            </div>
            <div className='text-small text-muted' style={{ fontSize: "10px" }}>

                <p>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                </p>
                <br />

                <p>
                    *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                </p>
                <br />

                <p>
                    Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
                </p>


            </div>
            <div className='row' style={{ fontSize: "10px" }} >
                <div className='col'></div>
                <div className='col'>NSE</div>
                <div className='col'>BSC</div>
                <div className='col'>MCX</div>
                <div className='col'>Terms & conditions</div>
                <div className='col'>Policies & procedures</div>
                <div className='col'>Privacy policy </div>
                <div className='col'>Disclosure </div>
                <div className='col'>For investor's attention </div>
                <div className='col'>Investor charter</div>
                <div className='col'>Sitemap</div>


            </div>
            <br />
        </div>
    );
}

export default Footer;