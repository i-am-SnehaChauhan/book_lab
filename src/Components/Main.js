import React from 'react';
import Card from './Card';   

const Main = () => {
  return (
    <>
      <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter your Book Name" />
                        <button><i className='fas fa-search'></i></button>
                        </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>
            <div className="container">
              {
                    <Card />
              }  
            </div>
    </>
  )
}

export default Main;