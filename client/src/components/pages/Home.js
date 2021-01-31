import React, {useState,useEffect,useContext} from 'react'

// to acces the user for hiding interested button
import {UserContext} from '../../App'


const Home = () => {

    const [data,setData] = useState([ ])

    //state has login user details
    const {state,dispatch} = useContext(UserContext)
    console.log("this is for user checking for interested array", state)

    useEffect(() => {
        fetch('/allpost', {
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer "+localStorage.getItem('jwt')
            }
        }).then (res => res.json())
        .then(result => {
         console.log(result) 
            // update data
            setData(result.posts)
        })
        // this emty array will stop the app from updating itself 
    },[])

    const interestedPost = (id)=> {
        fetch('/interested',{
            method:"put",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                //postId is from router.put('/interested') req.body.postId
                postId:id
            })
        }).then(res=> res.json())
        .then(result=> {
         /*    console.log(result) */
                      // logic for number of  interested/uninterested 
                      const newData = data.map(item => {
                        if(item._id===result._id){
                            return result
                        }else {
                            return item
                        }
                   })
                   setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }

    const uninterestedPost = (id)=> {
        fetch('/uninterested',{
            method:"put",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                //postId is from router.put('/interested') req.body.postId
                postId:id
            })
        }).then(res=> res.json())
        .then(result=> {
          /*   console.log(result) */
              // logic for number of  interested/uninterested 
         const newData = data.map(item => {
             if(item._id==result._id){
                 return result
             }else {
                 return item
             }
        })
        setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }
    const deletePost = (postid) => {
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
    }
    return (
      <div className="home">
          {
              data.map(item => {
                  console.log(state)
                  console.log(item.interested)

                return(
                    <div className="card home-card" key={item._id}>
                            <h5>{item.postedBy.name}  {item.postedBy._id === state._id
                            && <i className="material-icons" style={{
                                float:"right"

                            }}
                            onClick={()=>deletePost(item._id)}
                            >delete</i>
                            }</h5>
                            <div className="card-mage">
                                <img alt="" src ={item.image} 
                                style= {{
                                    maxWidth :"500px",

                                } } />
                            </div>
                            <div className="card-content">
                                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                                  {/* dot includes is not working or it's not functioning */}
                                  {/* The ternary operator in React */}
                                    {item.interested.includes(state._id)
                                    ? 
                                         <i className="material-icons" style={{margin:"10px"}} 
                                         onClick={()=>{
                                         uninterestedPost(item._id)
                                         }}
                                             >thumb_down</i>
                                            
                                    :
                                        <i className="material-icons" style={{margin:"10px"}}
                                                    onClick={()=>{
                                                        interestedPost(item._id)
                                                    }}
                                                
                                        >thumb_up</i>
                                    }
                                   
                                    <h6>{item.interested.length} interested</h6>
                                    <h6>{item.title}</h6>
                                    <p>{item.body}</p>
                                   {/*  <input type="text" placeholder="add a comment"/> */}
                                   <a href="https://www.paypal.com/paypalme/ningthangom"> <button  className="btn waves-light #2196f3 blue" style={{
                                        margin:"10px"
                                    }}>buy</button></a>
                                    <button className="btn waves-light #2196f3 blue"  style={{
                                        margin:"10px"
                                    }}>contact the seller</button>
                            </div>
                  </div>

                )
              })
          }
      </div>
    )
}


export default Home