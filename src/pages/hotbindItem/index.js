import React, { useState, useEffect } from 'react'
import "./index.css"
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import Like from "../../static/img/like"

export default function HotbindItem() {

  const { id } = useParams()
  const { hotBids } = useSelector((state) => state.hotBids)
  const [item, setItem] = useState(null)
  useEffect(() => {
    const selected = hotBids.find(hotBid => hotBid.id === id)
    setItem(selected)
  }, [hotBids])


/* console.log(item); */


  return (
    <>
 
    <div className="ıtem">
   
      <div className="ımge-detay">
      <div className="ımge-cover-ıtem">

      
        <img src={item?.image ?? ""} className="ımgee" ></img>
</div>
      </div>
      <div className="text-ıtem">
  
        <div className="creator-name">  <div>  {item?.creator}</div>   <div className="fav"><Like />{item?.fav}</div> </div>
        <div>  text</div>
        <div>  text</div>
        <div>  text</div>
        <div>  {item?.details}</div>
      </div>

    </div>
    </>
  )
}
