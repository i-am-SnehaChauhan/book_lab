import React from 'react'
import henry1 from "./henry.jpg"
import henry2 from "./laura.jpg"
import henry3 from "./toa.jpg"
function hero() {
    return (
        <>
        <div className="container" style={{"width":"100%","marginTop":"-62px","marginBottom":"10px"}}>
            <div id="carouselExampleDark" className="carousel carousel slide" data-bs-ride="carousel" style={{"width":"200%"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={henry1} className="d-block w-100" alt="..." style={{"width":"100%","height":"800px"}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h2 style={{"fontSize":"62px"}}>Satisfy all your book cravings!</h2>
                                <p style={{"fontSize":"39px"}}>Explore a wide variety of books for all genres</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={henry2} className="d-block w-100" alt="..."style={{"width":"100%","height":"800px"}} />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 style={{"fontSize":"62px"}}>Read and Read!</h2>
                                <p style={{"fontSize":"39px"}}>Read,Save and Download as many books as you like.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={henry3} className="d-block w-100" alt="..." style={{"width":"100%","height":"800px"}} />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 style={{"fontSize":"62px"}}>Never be alone!</h2>
                                <p style={{"fontSize":"39px"}}>There is something for all age groups.So search now!</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
        </>
    )
}

export default hero
