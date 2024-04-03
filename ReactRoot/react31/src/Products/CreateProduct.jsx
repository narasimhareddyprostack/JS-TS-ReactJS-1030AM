import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
const CreateProduct = () => {
  let [product, setProduct] = useState({"name":"","image":"", "qty":0, "price":0, "info":""})
  let [status,setStatus] = useState(false);
  let navigate =useNavigate() ;
  let imgHandler =(event)=>{
    let imgFile = event.target.files[0];
    let reader  = new FileReader()
    reader.readAsDataURL(imgFile);
    reader.addEventListener("load",()=>{
      if(reader.result){
        setProduct({...product,image:reader.result})
      }
      else{

      }
    })

  }
  let updateHandler = (event)=>{
    setProduct({...product,[event.target.name]:event.target.value})
  }
  let submitHandler=(event)=>{
      event.preventDefault()
      Axios.post('http://127.0.0.1:5000/api/products', product)
      .then((resp)=>{
        setStatus(true)
        //navigate('/admin')
      })
      .catch(()=>{})
  }
  return <>
    <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>
      <div className="row">

        {
          status?  <>
            {
              navigate("/admin")
            }
            </> :  <>
          <div className="col-md-6">
          <div className="card">
          <div className="card-header">
              <h4>Upload Product</h4>
            </div>
            <div className="card-body">
              <form  onSubmit={submitHandler}>
                <div className='form-group'>
                  <input onChange={updateHandler} name="name" className='form-control' type="text" placeholder='Product Name' />
                </div>
              
                <div className='form-group'>
                  <input onChange={imgHandler} name="image" className='form-control' type="file"/>
                </div>
                <div className='form-group'>
                  <input onChange={updateHandler} name="price" className='form-control' type="number" placeholder='Price' />
                </div>
                <div className='form-group'>
                  <input onChange={updateHandler} name="qty" className='form-control' type="number" placeholder='QTY' />
                </div>
                <div className='form-group'>
                  <input onChange={updateHandler} name='info' className='form-control' type="text" placeholder='Information' />
                </div>
                <input type="submit" value={"Upload"} className='btn btn-warning' />
              </form>
            </div>
           </div>
           
    
          </div>
          
          </>
        }
      </div>
    </div>
  </>
}

export default CreateProduct