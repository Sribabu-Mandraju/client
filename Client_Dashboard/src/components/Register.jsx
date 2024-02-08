import React, { useState } from 'react'
import Address from './Address';
import PersonalInfo from './PersonalInfo';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
    const navigate=useNavigate();
    const [page,setPage]=useState(0);
   const Title=["Personal Info","Address"];

   const pageDisplay=()=>{
    if(page===0){
        return <PersonalInfo/>
    }
    else{
        return <Address/>
    }
   }
  return (
    <>
       <section className="resource-form w-100" style={{
                    height:"87vh"
                }}>
       <div className='text-center bold-2 h2'  style={{color:"#006996"}}>Registration</div>
        <div className='container shadow my-5 border' style={{maxWidth:"500px",height:"400px" ,backgroundColor:"#F7FFFF"}}>
                <div className='d-flex flex-column' style={{alignItems:"center"}}>
                    {pageDisplay()}
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <button className='text-white mx-4' style={{width:"100px",borderRadius:"10px",backgroundColor:"#006996",borderColor:"#006996"}}
                        disabled={page==0}
                        onClick={()=>{
                         setPage((currPage)=>currPage-1)
                        }}>Previous</button> 
                       <button className='text-white mx-4' style={{width:"100px",borderRadius:"10px",backgroundColor:"#006996",borderColor:"#006996"}}
                       onClick={()=>{
                        if(page===Title.length-1){
                            navigate('/')
                        }
                        else{
                            setPage((currPage)=>currPage+1);
                        }
                       }}>{page===Title.length-1 ? "submit" : "Next"}</button>
                </div>
                
                </div> 
                <div className='d-flex justify-content-center'>Already Have Account  <Link to='/' className='mx-1'>Login</Link></div>
                
       </section>
    </>
  )
}

export default Registration