import React from 'react'
import '../App.css'

function Address() {
  return (
    <>
        <div className='d-flex'>
                <form className='row form-register d-flex justify-content-center py-3' style={{maxWidth:"400px",backgroundColor:"#F7FFFF"}}>
                    <div className='form-group'>
                        <label className='form-label ps-2'>Address</label>
                        <input className='form-control' type='text' placeholder='Enter Address' required/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label ps-2'>Phone number</label>
                        <input className='form-control' type='text' placeholder='Enter Phone number' required/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label ps-2'>City</label>
                        <input className='form-control' type='text' placeholder='Enter City'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label ps-2'>Country</label>
                        <input className='form-control' type='text' placeholder='Enter Country'/>
                    </div>
                </form>
        </div> 
    </>
  )
}

export default Address;