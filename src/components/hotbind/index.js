import React, {useState} from 'react'
import "./index.css"
import HotbindCard from "../hotbind-card/index"
import {useSelector} from "react-redux"



export default function Hotbind() {
 const {hotBids} = useSelector(state =>state.hotBids) 
const [count,setCount]=useState(8)

const handleSetCount = () =>{
    if (count <= hotBids?.length){
        setCount ( count + 8 )

    } else{
        setCount(8)
    }
    
}


 console.log(hotBids) 


    return (
        <>
         <p className="hot-title">Hotbind</p>
        <div className="hotbind ">
           
           
            {

                hotBids?.slice(0,count)?.map(item =>{
                    return ( <HotbindCard key={item.id} item={item}/>)
                })

               
 
            }
            
          

                

        </div>
     <div onClick={handleSetCount}>
     {
            count <= hotBids?.length ? 
            <img src="./img/load.svg" alt="load" className="load" ></img>
            :
            <div className="showles" ><span className="show">Show Less</span></div>
        }
     </div>
        
        <hr style={{marginBottom:"20px"}} ></hr>
        </>
    )
}
