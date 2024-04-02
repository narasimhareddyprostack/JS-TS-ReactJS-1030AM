import React, { useState } from 'react'

const CreateProduct = () => {
  let [product, setProduct] = useState({"name":"","image":"", "qty":0, "price":0, "info":""})
  return <>
    <div className="container mt-5">
    <pre>{JSON.stringify(product)}</pre>
      <div className="row">
      <div className="col-md-6">
      <div className="card">
      <div className="card-header">
          <h4>Upload Product</h4>
        </div>
        <div className="card-body">
          <form >
            <div className='form-group'>
              <input className='form-control' type="text" placeholder='Product Name' />
            </div>
          
            <div className='form-group'>
              <input className='form-control' type="file"/>
            </div>
            <div className='form-group'>
              <input className='form-control' type="number" placeholder='Price' />
            </div>
            <div className='form-group'>
              <input className='form-control' type="number" placeholder='QTY' />
            </div>
            <div className='form-group'>
              <input className='form-control' type="text" placeholder='Information' />
            </div>
            <input type="submit" value={"Upload"} className='btn btn-warning' />
          </form>
        </div>
       </div>
       

      </div>
      
      </div>
    </div>
  </>
}

export default CreateProduct