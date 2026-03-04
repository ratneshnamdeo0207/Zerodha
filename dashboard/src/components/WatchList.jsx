import React, {useState} from 'react'
import {Tooltip, Grow} from "@mui/material";
import { watchlist } from '../data/data';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import {BarChartOutlined, MoreHoriz} from "@mui/icons-material"
const WatchListitem = ({stock,key})=> {
  const [showWatchListActions, setShowWatchListActions] = useState(false)
  const handleMouseEnter = (e)=>{
    setShowWatchListActions(true)
  }
  const handleMouseLeave = (e)=>{
    setShowWatchListActions(false)
  }

  const WatchListActions = (index)=>{
    return (
      <span className="actions">
        <span>
          <Tooltip title="Buy (B)" placement='top' arrowTransitionComponent={Grow}>
            <button className="buy">Buy</button>
          </Tooltip>
          <Tooltip title="Sell (S)" placement='top' arrowTransitionComponent={Grow}>
            <button className="sell">Sell</button>
          </Tooltip>
          <Tooltip title="Analytics (A)" placement='top' arrowTransitionComponent={Grow}>
            <button className="action">
              <BarChartOutlined className="icon"/>
            </button>
          </Tooltip>
          <Tooltip title="more" placement='top' arrowTransitionComponent={Grow}>
            <button className="action">
              <MoreHoriz className="icon"/>
            </button>
          </Tooltip>

        </span>
      </span>
    )
  }
  
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "Down" : "up  "}>{stock.name}</p>
        <div className="iteminfo">
          <span className='percent'>{stock.percent}</span>
          {stock.isDown? <KeyboardArrowDown  className="down"/> : <KeyboardArrowUp className="up"/>}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions index={key}/>}
    </li>
  )
}

function WatchList() {
  return (
     <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index)=>{
          // return <p>stock.name</p>
          return <WatchListitem stock={stock} key={index}/>
})}
      </ul>
    </div>
  )
}

export default WatchList
