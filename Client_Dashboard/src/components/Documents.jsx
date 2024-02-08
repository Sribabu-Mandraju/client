import React from 'react'
import { IoDocuments } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Documents() {
    const data = [
        { id: 1, title: "Document one", email: "user1@example.com", postedBy: "u3tech", status: "approved" ,lable:"new"},
        { id: 2, title: "Document two", email: "user2@example.com", postedBy: "u3tech", status: "pending" },
        { id: 3, title: "Document three", email: "user3@example.com", postedBy: "u3tech", status: "rejected" },
        { id: 4, title: "Document four", email: "user4@example.com", postedBy: "u3tech", status: "approved" },
        { id: 5, title: "Document five", email: "user5@example.com", postedBy: "u3tech", status: "pending" },
        { id: 6, title: "Document six", email: "user6@example.com", postedBy: "u3tech", status: "rejected" },
        { id: 7, title: "Document seven", email: "user7@example.com", postedBy: "u3tech", status: "approved" },
        { id: 8, title: "Document eight", email: "user8@example.com", postedBy: "u3tech", status: "pending" },
        { id: 9, title: "Document nine", email: "user9@example.com", postedBy: "u3tech", status: "rejected" },
        { id: 10, title: "Document ten", email: "user10@example.com", postedBy: "u3tech", status: "approved" },
        { id: 11, title: "Document eleven", email: "user11@example.com", postedBy: "u3tech", status: "pending" },
        { id: 12, title: "Document twelve", email: "user12@example.com", postedBy: "u3tech", status: "rejected" },
        { id: 13, title: "Document thirteen", email: "user13@example.com", postedBy: "u3tech", status: "approved" },
        { id: 14, title: "Document fourteen", email: "user14@example.com", postedBy: "u3tech", status: "pending" },
        { id: 15, title: "Document fifteen", email: "user15@example.com", postedBy: "u3tech", status: "rejected" },
        { id: 16, title: "Document sixteen", email: "user16@example.com", postedBy: "u3tech", status: "approved" },
        { id: 17, title: "Document seventeen", email: "user17@example.com", postedBy: "u3tech", status: "pending" },
        { id: 18, title: "Document eighteen", email: "user18@example.com", postedBy: "u3tech", status: "rejected" },
        { id: 19, title: "Document nineteen", email: "user19@example.com", postedBy: "u3tech", status: "approved" },
        { id: 20, title: "Document twenty", email: "user20@example.com", postedBy: "u3tech", status: "pending" },
      ];
  return (
   <section  className="documents mt-3 mx-auto w-100 d-flex flex-column"
   style={{
     width:"97%",
     maxWidth:"1100px",
     height:"87vh",
     overflowY:"scroll"
 }}>
      <div className="w-100  d-flex align-items-center py-3" style={{ color: "#006996" }}>
            <IoDocuments style={{ fontSize: "25px" }} />
            <div className="h4 px-2 pt-2">Documents</div>
            </div>
       <div className='row'>
            
           {data.map((i)=>(
             <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card mb-3">
                    <div class="card-body">
                        <div className="card-title d-flex justify-content-between">
                            <h5>{i.title}</h5>
                            <p style={{backgroundColor:"grey",borderRadius:"3px"}}>{i.lable}</p>
                        </div>
                        <p class="card-text">Date : 28/01/2024</p>
                        <p class="card-text">{`From - ${i.postedBy}`}</p>
                        <Link to={`/documents/${i.title}`} class="btn btn-primary">View</Link>
                    </div>
                </div>
             </div>
           ))}
            {/* <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Document Title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">View</a>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Document Title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">View</a>
                </div>
                </div>
            </div> */}
            
        </div>
        {/* <div className='row mt-2'>
            
            <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Document Title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">View</a>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Document Title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">View</a>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Document Title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">View</a>
                </div>
                </div>
            </div>
            
        </div> */}
        {/* <div className='row mt-2'>
            
            <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Document Title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">View</a>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Document Title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">View</a>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Document Title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">View</a>
                </div>
                </div>
            </div>
            
        </div> */}
   </section>
  )
}

export default Documents;