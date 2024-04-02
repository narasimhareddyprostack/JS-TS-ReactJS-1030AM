import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const Products = () => {
  let [products,setProducts]=useState([])
  
  useEffect(()=>{
    Axios.get('http://127.0.0.1:5000/api/products')
    .then((resp)=>{setProducts(resp.data)})
    .catch()
  },[])
  return <>
  <pre>{JSON.stringify(products)}</pre>
  <div className="container">
    <div className="row">
      {
        products.length > 0 ? <>
       {
        products.map((product)=>{
          return <div className="col-md-3">
                <div className="card">
                  <div className="card-header">
                    <img src={product.image}  alt="image Missing"   />
                  </div>
                  <div className="card-body">
                    <ul className='list-group'>
                      <li className='list-group-item'>{product.name}</li>
                      <li className='list-group-item'>{product.price}</li>
                      <li className='list-group-item'><button className='btn btn-warning' >Add Cart</button></li>
                    
                    </ul>
                  </div>
                </div>
                </div>
        })
       }
        </> : <h5>No Data</h5>
      }
    </div>
  </div>
  </>
}

export default Products