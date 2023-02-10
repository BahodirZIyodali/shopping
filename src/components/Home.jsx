import React from 'react'
import Products from './Products'
const Home = () => {
  return (
    <div className='hero'>
<div className="card text-bg-dark">
  <img src="https://itk-assets.nyc3.cdn.digitaloceanspaces.com/2020/01/02ff1f70-e5bb-11e9-bfdb-cd062f61cb1e-scaled.jpg" className="card-img" alt="..."height='550px'  width='100%'/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0" >NEW SEASON ARRIVALS</h5>
    <p className="card-text fs-2 lead">CHECK OUTS ALL THE TRENDS</p>
    </div>
  </div>
 </div>
 <Products/>
    </div>
  )
}

export default Home