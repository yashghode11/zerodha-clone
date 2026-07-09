import React from 'react';

function Hero() {
    return (

        <div className='conatainer-fluid'>



            <div className="d-flex justify-content-between align-items-center p-5 text-white"
                id="supportsystemwrapper">
                <h3>Support Portal</h3>
                <a href="">Support Portal</a>

            </div>

            <div className='row align-center p-5 '>

                <div className=' col-6  text-white '>
                    <h3>Search for an answer or browse help topics to create a ticket</h3>
                    <br />
                    <div className='mt-4 px-5'>
                                            <input style={{width: "25rem",height: "6rem",borderRadius: "10px",padding: "12px",resize: "none",}} placeholder="Eg: How do I activate F&O ?"></input>
<br/>
<br />
                        <a href="" className='mx-2'>Track account opening</a><br />
                        <a href="" className='mx-2'>Track segment activation</a><br />
                        <a href="" className='mx-2'>Intraday margins</a><br />
                        <a href="" className='mx-2'>Kite user manual</a><br />
                    </div>


                </div>
                <div className=' col-2  text-white '></div>
                <div className='col-4  text-white '>
                    <h3 className='mx-4'>Featured</h3>
                    <br/>
                    <br />
                    <div className='mt-4 '>
                        <ol className='mx-4' >
                        <li><a href="">Track account opening</a></li><br />
                        <li><a href="">Track segment activation</a></li>
                    </ol>
                    </div>
                    

                </div>

            </div>







        </div>
    );
}

export default Hero;