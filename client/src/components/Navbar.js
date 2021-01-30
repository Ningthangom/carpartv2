import React,{useContext} from 'react'

import {Link} from 'react-router-dom'
import {UserContext } from '../App'
const Navbar = () => {
  const {state,dispatch} = useContext(UserContext)
  const renderList = () => {
    if (state) {
      // reuturn the array as more than one is needed as output
    // map maybe used as well
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">Create Post</Link></li>
      ]
      }else {
        return[
          <li><Link to="/signin">Login</Link></li>,
            <li><Link to="/signup">Sign Up</Link></li>
        ]
      }
    }
  
   return (
        <nav>
        <div className="nav-wrapper white" >
          {/*   to stop access home without loggin in put conditon with (state present or not)   */}
          <Link to={state? "/": "/signin"} className="brand-logo left">CarParts</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
    )
}

export default Navbar