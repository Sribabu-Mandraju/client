import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const Login = () => {
    const navigate=useNavigate();
    
    return (
        <>
            <section className="resource-form w-100  d-flex justify-content-center align-items-center flex-column"
                    style={{
                    width:"100%",
                    height:"87vh",
                    overflowY:"scroll"

                }}
                >
                    <div className="text-center h3 bold-2" style={{color:"#006996"}}>Login !</div>
                    <form className="resource-form shadow flex-column  ps-3 py-3  mx-auto "  
                    style={{
                    width:"97%",
                    maxWidth:"450px",
                    backgroundColor:"#F7FFFF",
                    display:"flex", 
                    
                    }}
                    >
                        <span className="mt-3">
                            <label htmlFor="" className=" ps-2">User Name</label>
                            <input type="text" name="" placeholder="Enter your Name" />
                        </span>


                        <span className="mt-3">
                            <label htmlFor="password" className=" ps-2">Password</label>
                            <input type="password" name="" placeholder="Enter your password" />
                        </span>
                        
                        <span className="mt-3 w-100">
                            <input type="submit" onClick={()=>{
                                navigate("/home")
                            }} value="submit" className="w-100" style={{backgroundColor:"#006996",color:"white"}} />
                        </span>
                    </form>
                    <span className='mt-3'>Don't have account yet <Link to='/register'>Register</Link></span>
            </section>
        </>
    )
}
export default Login