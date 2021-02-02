import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
// this useParams is used for accesing userid in app.js /profile/userid
import {useParams} from 'react-router-dom'
import axios from 'axios';

/* const deletePost = (postid) => {
    console.log("deletePost is firing")
    fetch(`/deletepost/${postid}`,{
        method: "delete",
        headers: {
            Authorization: "Bearer "+localStorage.getItem('jwt')
        }
    }).then(res=> res.json())
    .then(result=> {
        console.log(result)
    })
} */
const Profile = () => {
    // set the initial state as null 
    const [userProfile, setUserProfile] = useState(null)
    // for getting the user info
    const {state,dispatch} = useContext(UserContext)
    // this user id comes from app.js (<Route path="/profile/:userid">)
     const {userid} = useParams() 
    console.log("this is ",userid,"from userprofile")
// http://localhost:5000
    useEffect(()=> {
        fetch(`/user/${userid}`,{
            method:"get",
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem('jwt')
            }
        }).then(res=>res.json())
        .then(result=> {
            console.log(result)
            setUserProfile(result)
          /*   setImage(result.mypost) */
        })

    },[]) 

    const followUser = ()=> {
        fetch('/follow', {
            // put is for updating the data
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                // followId from the backend is set to current userid
                followId:userid
            })
        })
        // send the response to json
        .then(res=>res.json())
        // get the result
        .then(result => {
            console.log(result)
        })
   }


    return (
    <>
    {userProfile 
    ? 
       <div style={{
        maxWidth:"550px",
        margin:"0px auto"
         }}>
            <div style= {{
                display:"flex",  
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
                        <h4>{userProfile.user.name}</h4>
                        <h5>{userProfile.user.email}</h5>
                        <div style ={{display:"flex",justifyContent:"space-between", width:"108%"}}>
                            <h5> {userProfile.posts.length} posts </h5>
                            <h5> 40 followers</h5>
                            <h5> 40 following</h5>         
                        </div>
                        <button className="btn waves-effect waves-light #2196f3 blue darken-1"
                         onClick={followUser}>follow</button>
                    </div>
            </div>
            <div className="gallery">
                {
                    userProfile.posts.map(item=> {
                        return(
                            <div className="card home-card" key={item._id}>
                           {/*  <h5>{item.postedBy.className}</h5> */}
                            <div className="card-mage">
                                <img alt="" src ={item.image} 
                                style= {{
                                    maxWidth :"500px"
                                } } />
                            </div>
                            <div className="card-content">
                                  {/*   <i className="material-icons" style={{color:"red"}}>favorite</i> */}
                                    <h6>{item.title}</h6>
                                    <p>{item.body}</p>
                                    {/* <input type="text" placeholder="add a comment"/> */}
                              {/*      <a href="https://www.paypal.com/paypalme/ningthangom"> <button  className="btn waves-light #2196f3 blue" style={{
                                        margin:"10px"
                                    }}>edit</button></a>
                                    <button className="btn waves-light #2196f3 blue"  style={{
                                        margin:"10px"
                                    }}>sold</button> */}
                                      <button className="btn waves-light #2196f3 blue"  style={{
                                        margin:"10px"
                                    }}
                                  /*   onClick={deletePost()} */
                                   
                                    >cancel</button> 
                            </div>
                  </div>

                         /*    <img   className = "item"
                            src = {item.image} alt={item.title}/> */
                        )
                    })
                }
            </div>
         </div>
    : <h2>loading.........</h2>}
     
    </>
    )
}

export default Profile
