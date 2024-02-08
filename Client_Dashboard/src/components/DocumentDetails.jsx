import React from 'react'
import { useParams ,Link} from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";
import logo from '../assets/logo1.png'
import Requests from './Requests';
function DocumentDetails() {
    const params=useParams();
    console.log(params);
  return (
    <>
     <div className="w-100 d-flex align-items-center justify-content-between shadow" style={{
                    height:"50px",
                    backgroundColor:"#e6f2ff"
                }}>
                    <div className="mx-3" >
                        <Link to="/documents">
                            <MdKeyboardBackspace style={{fontSize:"30px"}} />
                        </Link>
                    </div>
                    <img src={logo} alt="" style={{
                        height:"40px"
                    }} />
                </div>
                <section className="w-100 mx-auto">
                    <Requests/>
                {/* <div className="w-100 d-flex align-items-center justify-content-between shadow" style={{
                    height:"50px",
                    backgroundColor:"#e6f2ff"
                }}>
                    <div className="mx-3" >
                        <Link to="/clients">
                            <MdKeyboardBackspace style={{fontSize:"30px"}} />
                        </Link>
                    </div>
                    <img src={logo} alt="" style={{
                        height:"40px"
                    }} />
                </div>
                <div className="breadcrumb py-3 px-3">
                    <div className="breadcrumb-item h4">
                        <Link to="/documents" style={{textDecoration:"none"}}>Clients</Link>
                    </div>
                    <div className="breadcrumb-item h4" style={{textDecoration:"none"}}>{client.title}</div>
                </div> */}
        </section>
    </>
  )
}

export default DocumentDetails