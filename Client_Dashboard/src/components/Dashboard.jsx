import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
    const data = [
        { id: 1, title: "Response one", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 2, title: "Response two", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 3, title: "Response three", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 4, title: "Response four", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 5, title: "Response five", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 6, title: "Response six", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 7, title: "Response seven", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 8, title: "Response eight", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 9, title: "Response nine", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 10, title: "Response ten", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 11, title: "Response eleven", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 12, title: "Response twelve", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 13, title: "Response thirteen", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 14, title: "Response fourteen", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 15, title: "Response fifteen", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 16, title: "Response sixteen", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 17, title: "Response seventeen", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
        { id: 18, title: "Response eighteen", date: "28/08/2023", postedBy: "u3tech", status: "Rejected" },
        { id: 19, title: "Response nineteen", date: "28/08/2023", postedBy: "u3tech", status: "Approved" },
        { id: 20, title: "Response twenty", date: "28/08/2023", postedBy: "u3tech", status: "In Review" },
      ];

  // const totalItems = data.length;
  // const totalPages = Math.ceil(totalItems / itemsPerPage);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentItems = data.slice(startIndex, endIndex);

  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  const [search,setSearch]=useState('');
  const handleSearch=(e)=>{
    setSearch(e.target.value.toLowerCase());
  }
  const filteredData=data.filter((item)=>Object.values(item).some((value)=>value.toString().toLowerCase().includes(search)))
  
  const handleRow=(id)=>{
      return alert(`Row ${id} clicked`)
  }
  
  return (
    <>
      <section
        className="dashboard ps-2 mt-3 mx-auto w-100 d-flex flex-column"
        style={{
          width:"97%",
          maxWidth:"1100px",
          height:"87vh"
      }}
      >
        <div className="w-100  d-flex align-items-center py-3" style={{ color: "#006996" }}>
          <AiOutlineDashboard style={{ fontSize: "25px" }} />
          <div className="h4 px-2 pt-2">Dashboard</div>
        </div>
            <div className="dashboard-top w-100 d-flex justify-content-between">
              <div className="All-content mx-3">
                <a className="mx-2" href="">All</a>
                <a className="mx-2" href="">Last 24Hours</a>
                <a className="mx-2" href="">Last 7Days</a>
              </div>
              <div className="search-bar mx-3">
              <FiSearch style={{ marginRight: "-20px", zIndex: "1" ,position:"sticky"}} />
              <input type="text" placeholder="search......." className="py-1 ps-4" value={search} onChange={handleSearch} style={{ borderRadius: "5px", border: "0.3px solid grey" }} />
              </div>
            </div>
        <div className="table-responsive  w-100  mt-4" style={{ height: "87vh"}}>
          <table
            className="resource-content table "
            style={{
              width: "100%",
              minWidth: "340px",
              backgroundColor: "#F7FFFF",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <thead className="border" style={{ backgroundColor: " #F4F4F4"}}>
              <tr className="text-center bold-2" style={{ textWrap: "nowrap", color: "#006996",position:"sticky"}}>
                <td className="ps-2" style={{ color: "#006996" }}>
                  S.no
                </td>
                <td className="ps-2" style={{ color: "#006996" }}>
                  Title
                </td>
                <td className="ps-2" style={{ color: "#006996" }}>
                  Date
                </td>
                <td className="ps-2" style={{ color: "#006996" }}>
                  Posted by
                </td>
                <td className="ps-2" style={{ color: "#006996" }}>
                  Status
                </td>
              </tr>
            </thead>
            <tbody style={{backgroundColor:'#cce6ff'}}>
              {filteredData.map((item,index) => (
                <tr key={index} onClick={()=>handleRow(item.id)} className=" text-center mt-2 py-2 bg-primary" style={{ testWrap: "nowrap",backgroundColor:"#cce6ff" }}>
                  <td className="p-2">{item.id}</td>
                    
                  <td className="p-2" style={{ textWrap: "nowrap" }}>
                  {item.title}
                  </td>
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">{item.postedBy}</td>
                  <td className="p-2" ><p className={`m-2 badge text-white ${getStatusBadgeColor(item.status)}`}>{item.status}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="pagination d-flex justify-content-center" style={{position:"sticky",left:"0"}}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`${currentPage === index + 1 ? "active mx-2 p-2 " : "mx-2 p-2"} ${currentPage == index +1?"bg-primary":"bg-white"}`} style={{borderRadius:"7px"}}>
                {index + 1}
              </button>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "Approved":
      return "bg-success";
    case "In Review":
      return "bg-warning";
    case "Rejected":
      return "bg-danger";
    default:
      return "";
  }
};

export default Dashboard;
