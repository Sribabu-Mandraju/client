import React, { useState, useEffect } from 'react';


import Dashboard from '../components/Dashboard'
import Documentation from '../components/sendDocument'
import Login from '../components/Login';
import SendNotice from '../components/sendNotice';

import { TbBellRingingFilled } from "react-icons/tb";
import { PiListFill } from "react-icons/pi";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { AiFillFolder } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import Registration from '../components/Register';
import { IoMdPersonAdd } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import img from '../assets/logo1.png';
import Clients from '../components/Requests';
import Requests from '../components/Requests';
import { useNavigate } from 'react-router-dom';
import Documents from '../components/Documents';







const Home = () => {
  const tabs = [ 
    {tab:"dashboard",tabName:"Dashboard",icon:<AiOutlineDashboard />},
    {tab:"documents",tabName:"Documents",icon:<IoDocuments/>},
    {tab:"Senddocuments",tabName:"Send Documents",icon:<AiFillFolder />},
    // {tab:"Requests",tabName:"Requests",icon:<BsChatSquareQuoteFill/>},
    {tab:"notice",tabName:"Send Feedback",icon:<MdFeedback/>},
  ]
  const [tab, setTab] = useState('dashboard');
  const [width, setWidth] = useState(window.innerWidth);
  const [side, setSide] = useState(false);

  const handleTab = (name) => {
    setTab(name);
  };

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  const handleSide = () => {
    if(width<1000){
      setSide(false)
    }
    if(width>1000){
      setSide(true)
    }
    
    setSide(!side)
    
  };

  const handleSideDisplay=()=>{
      if(setSide(false)){
        setSide(true)
      }
  }
  const handleNavItems=()=>{
    if(setProfile(false)){
      setProfile(true)
    }
    if(setDropdown(false)){
      setDropdown(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWidth);

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, [side]);

  const [profile,setProfile]=useState(false);
  const handleProfile=()=>{
    if(setProfile(false)){
      setProfile(true)
    }
    if(setDropdown(false)){
      setDropdown(true)
    }
    setProfile(!profile)
  };


  const [dropdown,setDropdown]=useState(false);
  const handleDropdown=()=>{
    if(setDropdown(false)){
      setDropdown(true)
    }
    if(setProfile(false)){
      setProfile(true)
    }
    setDropdown(!dropdown)
  };
const navigate=useNavigate();
  return (
    <>
      
      <div className="d-flex justify-content-between align-items-center shadow w-100" style={{ height: '50px',backgroundColor:"#e6f2ff" }}>
        <button className="btn" onClick={handleSide}>
          <PiListFill /> <img src={img} alt='logo' style={{width:"70px",fontSize:"50px"}}/>
        </button>
        <div className="d-flex align-items-center mx-3" style={{height:"50px"}}>
         <button className=" bell-drop" onClick={handleDropdown} style={{position:"relative",height:"50px",backgroundColor:"#e6f2ff",color:"black",fontSize:"",borderRadius:"",border:"none"}}>
            <TbBellRingingFilled className='mx-2 ' style={{fontSize:"25px",backgroundColor:""}} />
            {dropdown && (<div className="dropdown-menu">
              <h5 style={{paddingLeft:"10px",borderBottom:"1px solid grey"}}>Notifications</h5>
              <p>Somethingg recived from admin</p>
              <p>please approve our request</p>
            </div>)}
          </button>

          <div className="profile mx-2 d-flex justify-content-center align-items-center" onClick={handleProfile}>
             <button className="profile-dropdown" style={{border:"none",height:"50px",backgroundColor:"#e6f2ff"}}><FaUserCircle style={{fontSize:"25px"}}/></button>
             {profile && (<div className='profile-dropdown-content'>
                <p><CgProfile/> View Profile</p>
                <p><MdOutlineEdit/> Edit Profile</p>
                <p><BiLogOut/> Logout</p>
             </div>)}
          </div>
          {width>700?<><div className="prof-name mx-1" style={{fontWeight:"700",color:"#006996"}}>User</div></>:<></>}
        </div>
      </div>
      <div className="w-100 d-flex" style={{ position: 'relative' }} onClick={handleNavItems}>
       {
        width>1000?
        <>
        <div className="sidebar bg-white  d-flex flex-column shadow" style={{ minWidth: '300px', marginLeft: side ? '0px' : '-300px',transitionDuration:"0.3s",zIndex:"1" }}>
            {
              tabs.map((data)=> (
                <div className={`tab mb-2  ${tab== data.tab ?"tab-actived":""}`} onClick={() => setTab(data.tab)}>
                  <span className="px-3">{data.icon}</span>
                  <span>{data.tabName}</span>
                </div>
              ))
            }
            <div className={`tab mb-2 mb-5 `}  onClick={()=> {
            navigate('/')
          }}>
                  <span className="px-3 b-5"><CiLogin /></span>
                  <span>logout</span>
          </div>
        </div>  </>:
        <>
          <div className="sidebar bg-white d-flex flex-column shadow " style={{minWidth: '300px', position:"absolute",left:side?'0px':'-300px',transitionDuration:'0.3s',zIndex:"1" }}>
            {
              tabs.map((data)=> (
                <div className={`tab mb-2  ${tab== data.tab ?"tab-actived":""}`} onClick={() => setTab(data.tab)}>
                    <span className="px-3">{data.icon}</span>
                    <span>{data.tabName}</span>
                </div>
              ))
            }
          </div>  
        </>
       }
        <div className="d-flex justify-content-center align-items-center shadow mx-auto mt-4" onClick={handleSideDisplay} style={{maxWidth:"1200px",width:"97%"}} >
          {tab=="dashboard" && <><Dashboard /></>}
          {tab=="documents" && <><Documents/></>}
          {tab=="Senddocuments" && <><Documentation /></>}
          {tab=="notice" && <SendNotice /> }

        </div>

      </div>

    </>
  );
};

export default Home;
