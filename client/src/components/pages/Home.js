import React, {useState,useEffect} from 'react'

const Home = () => {

    const [data,setData] = useState([ ])
    
    useEffect(() => {
        fetch('/allpost', {
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer "+localStorage.getItem('jwt')
            }
        }).then (res => res.json())
        .then(result => {
        /*     console.log(result) */
            // update data
            setData(result.posts)
        })
        // this emty array will stop the app from updating itself 
    },[])
    return (
      <div className="home">
          {
              data.map(item => {

                return(
                    <div className="card home-card" key={item._id}>
                            <h5>{item.postedBy.className}</h5>
                            <div className="card-mage">
                                <img alt="" src ={item.image} 
                                style= {{
                                    maxWidth :"500px",

                                } } />
                            </div>
                            <div className="card-content">
                                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                                    <h6>{item.title}</h6>
                                    <p>{item.body}</p>
                                    <input type="text" placeholder="add a comment"/>
                                    <button className="btn waves-light #2196f3 blue" style={{
                                        margin:"10px"
                                    }}>buy</button>
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