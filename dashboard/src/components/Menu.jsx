import React, {useState} from 'react'
import {Link} from "react-router-dom"

function Menu() {

    let [selectedMenu, setSelectedMenu] = useState(0)
    let [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)

    const handleSelectedMenu = (index)=>{
      setSelectedMenu(index)
    }
    const handleProfileDropdown = ()=>{
      setIsProfileDropdownOpen(!isProfileDropdownOpen)
    }
    const menuClass = "menu"
    const activeMenuClass = "menu selected"


  return (
   <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleSelectedMenu(0)}><p className={selectedMenu === 0 ? activeMenuClass: menuClass}>Dashboard</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleSelectedMenu(1)}><p className={selectedMenu === 1 ? activeMenuClass: menuClass}>Orders</p></Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleSelectedMenu(2)}><p className={selectedMenu === 2 ? activeMenuClass: menuClass}>Holdings</p></Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleSelectedMenu(3)}><p className={selectedMenu === 3 ? activeMenuClass: menuClass}>Positions</p></Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleSelectedMenu(1)}><p className={selectedMenu === 1 ? activeMenuClass: menuClass}>Funds</p></Link>
           
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleSelectedMenu(1)}><p className={selectedMenu === 1 ? activeMenuClass: menuClass}>Apps</p></Link>
          
          </li>
        </ul>
        <hr />
        <div className="profile" >
            <div className="avatar">ZU</div>
          <Link style={{textDecoration:"none"}} onClick={handleProfileDropdown}>
            <p className="username">USERID</p>
          </Link>
         
        </div>
      </div>
    </div>
  )
}

export default Menu
