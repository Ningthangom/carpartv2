import React from 'react'

const Profile = () => {
    return (
        <div style={{
            maxWidth:"550px",
            margin:"0px auto"
        }}>
                <div style= {{
                    display:"flex",
                    // ask how to move the tex to the left
                    justifyContent:"space-around",
                    margin:"18px 0",
                    borderBottom: "1px solid grey"
                }} >
                        <div>
                                <img alt = ""  src="https://images.unsplash.com/photo-1611433216945-3e59dc2de4e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" 
                                 style= {{width:"160px", height: "160px",
                                                 borderRadius: "80px",
                                                 margin:"20px",
                                                 /* position:"relative",
                                                left:"50%" */}} 
                                />
                        </div>
                        <div>
                            <h4>rahamat</h4>
                            <div style ={{display:"flex",justifyContent:"space-between", width:"108%"}}>
                                <h5>40 posts </h5>
                                <h5> 40 followers</h5>
                                <h5> 40 following</h5>

                            </div>
                        </div>
                </div>
                <div className="gallery">
                    <img   className = "item"
                            alt="" 
                            src = "https://images.unsplash.com/photo-1611433216945-3e59dc2de4e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"/>
                     <img   className = "item"
                            alt="" 
                            src = "https://images.unsplash.com/photo-1611433216945-3e59dc2de4e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"/>
                     <img   className = "item"
                            alt="" 
                            src = "https://images.unsplash.com/photo-1611433216945-3e59dc2de4e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"/>
                     <img   className = "item"
                            alt="" 
                            src = "https://images.unsplash.com/photo-1611433216945-3e59dc2de4e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"/>
                    
                </div>
        </div>
    )
}

export default Profile
