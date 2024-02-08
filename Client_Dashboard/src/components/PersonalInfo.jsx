import React from 'react'
import '../App.css'

function PersonalInfo() {
  return (
    <div>
           <div className='d-flex'>
                <form className='form-register row d-flex justify-content-center align-content-center py-3' style={{maxWidth:"400px",backgroundColor:"l#F7FFFF"}}>
                    <div className='form-group'>
                        <label className='form-label ps-2'>First name</label>
                        <input className='form-control' type='text' placeholder='Enter First name'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label ps-2'>Last Name</label>
                        <input className='form-control' type='text'placeholder='Enter Last name' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label ps-2'>Password</label>
                        <input className='form-control' type='password' placeholder='Enter Password'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label ps-2'>Confirm Password</label>
                        <input className='form-control' type='password' placeholder='Enter Confirm Password'/>
                    </div>
                </form>
        </div> 
    </div>
  )
}

export default PersonalInfo