import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'


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
    const [myposts, setMyPosts] = useState([])
    // for getting the user info
    const {state,dispatch} = useContext(UserContext)
    console.log("this is state",state)

    useEffect(()=> {
        fetch('/mypost',{
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem('jwt')
            }
        }).then(res=>res.json())
        .then(result=> {
            console.log(result)
            setMyPosts(result.mypost)
        })

    },[])


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
                                <img alt = ""  src={state?state.pic:"loading"}
                                 style= {{width:"160px", height: "160px",
                                                 borderRadius: "80px",
                                                 margin:"20px",
                                                 /* position:"relative",
                                                left:"50%" */}} 
                                />
                        </div>
                        <div>
                            <h4>{state?state.name:"loading"}</h4>
                            <h6>{state?state.email:"loading"}</h6>
                            <div style ={{display:"flex",justifyContent:"space-between", width:"108%"}}>
                                <h5>{myposts.length} posts </h5>
                                <h5> {state?state?.followers?.length: "0"} followers</h5>
                                <h5>{state?state?.following?.length: "0"} following</h5>
                            </div>
                            {/* <button className="btn waves-effect waves-light #2196f3 blue darken-1"
                         onClick={followUser}>follow</button> */}
                        </div>
                </div>
                <div className="gallery">
                    {
                        myposts.map(item=> {
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
                                          {/* <button className="btn waves-light #2196f3 blue"  style={{
                                            margin:"10px"
                                        }} */}
                                      {/* /*   onClick={deletePost()} */ }
                                       
                                        {/* // >cancel</button>  */}
                                </div>
                      </div>
    
                             /*    <img   className = "item"
                                src = {item.image} alt={item.title}/> */
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Profile
