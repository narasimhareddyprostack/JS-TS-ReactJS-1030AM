import React,{useRef} from 'react'

const Reg = () => {
 let btnRef=useRef()

 let acceptTC = (event)=>{
        console.log(event.target.checked)
       
        if(event.target.checked ===true){
            btnRef.current.disabled  = false
        }
        else{
            btnRef.current.disabled  = true
        }
 }

  return <div className='container'>
  <div className="rwo">
        <div className="col-md-4">
                    <h2>Registration Component</h2>
            <form >
                <div className='form-group'>
                    <input className='form-control' type="text" placeholder='User Name' />
                </div>
                <div className='form-group'>
                    <input className='form-control' type="text" placeholder='Mobile' />
                </div>
                <div className='form-check'>
                <input type="checkbox"  onChange={acceptTC}/> Please Accept Terms & Conditions
                </div>
                <input type="submit" value="Registration" className='btn btn-warning' disabled ref={btnRef} />
            </form>
  </div>
  </div>
            
        </div>
}

export default Reg