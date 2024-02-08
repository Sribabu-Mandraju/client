import React, { useState } from "react";
import { MdOutlineGroups } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import CustomModal from "./Modal";

const Requests = () => {
  
  const data = [
    { id: 1, title: "Response one", Date:"00/00/0000", postedBy: "u3tech", status: "approved" },
    { id: 2, title: "Response two", Date:"00/00/0000", postedBy: "u3tech", status: "pending" },
    { id: 3, title: "Response three", Date:"00/00/0000", postedBy: "u3tech", status: "rejected" },
  ];
  
      
      

  

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section
        className="dashboard ps-2 mx-auto w-100 d-flex flex-column"
        style={{
          width:"97%",
          maxWidth:"1100px",
          height:"87vh",
          overflowY:"scroll"
      }}
      >
        <div className="w-100  d-flex align-items-center py-3" style={{ color: "#006996" }}>
          <BsChatSquareQuoteFill style={{ fontSize: "20px" }} />
          <div className="h4 px-2">Requests</div>
        </div>
        <div className="table-responsive table-striped w-100  mt-4" style={{ height: "auto", overflow: "" }}>
          <div className="d-flex align-items-center mb-3 justify-content-between" style={{position:"sticky",left:"0"}}>
            <div className="mx-2 d-flex align-items-center">
              <FiSearch style={{ marginRight: "-20px", zIndex: "1" }} />
              <input type="text" placeholder="search......." className="py-1 ps-4" style={{ borderRadius: "5px", border: "0.3px solid grey" }} />
            </div>
          </div>
          <table
            className="resource-content table "
            style={{
              width: "97%",
              minWidth: "340px",
              backgroundColor: "#F7FFFF",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <thead className="border" style={{ backgroundColor: " #F4F4F4" }}>
              <tr className="text-center bold-2" style={{ textWrap: "nowrap", color: "#006996" }}>
                <td className="ps-2" style={{ color: "#006996" }}>
                  S.no
                </td>
                <td className="ps-2" style={{ color: "#006996" }}>
                  Document
                </td>
                <td className="ps-2" style={{ color: "#006996" }}>
                  Date
                </td>
                <td className="ps-2" style={{ color: "#006996" }}>
                  posted By
                </td>
                <td className="ps-2" style={{ color: "#006996" }}>
                  Details
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className=" text-center mt-2 py-2" key={item.id} style={{ testWrap: "nowrap" }}  >
                  <td className="p-2">{item.id}</td>
                  <td className="p-2" style={{ textWrap: "nowrap" }}>
                    {item.title}
                  </td>
                  <td className="p-2">{item.Date}</td>
                  <td className="p-2">{item.postedBy}</td>
                  <td className="p-2" >
                    <button className=" btn btn-primary d-flex justify-content-center align-items-center w-100" style={{height:"30px"}} onClick={openModal}>
                        Review
                    </button>
                    <CustomModal showModal={showModal} closeModal={closeModal}>
                       
                        <div className="Review">
                            <p>Model content goes here</p>
                        </div>
                    </CustomModal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </section>
    </>
  );
};

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "approved":
      return "bg-success";
    case "pending":
      return "bg-warning";
    case "rejected":
      return "bg-danger";
    default:
      return "";
  }
};

export default Requests;