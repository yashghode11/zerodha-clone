import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
    
             <div className='container mt-4'>
            <div className='row'>

 <div className='col-6 p-5'>
                    <img src={imageURL} style={{ width: "30rem" }} />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='row mb-3' >
                        <div className='col-4'>
                            <a style={{ textDecoration: "none" }} href={tryDemo} >Try demo <i class="fa-solid fa-arrow-right-long"></i></a>
                               </div>
                        <div className='col-4'>
                           <a style={{ textDecoration: "none" }} href={learnMore} >Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                        <div className='col-4'></div>

                    </div>
                    <div className='row' >
                        <div className='col-5'>
                           <a style={{ textDecoration: "none" }} href='{googlePlay}' ><img src='media/images/googlePlayBadge.svg'></img></a>
                         </div>
                        <div className='col-5'>
                                <a style={{ textDecoration: "none" }} href='{appStore}' ><img src='media/images/appstoreBadge.svg'></img></a>
                         </div>

                    </div>





                </div>
               
            </div>
        </div>
    );
}

export default LeftSection;