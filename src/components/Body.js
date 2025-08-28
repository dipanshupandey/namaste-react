import Card from "./Card"
import { restraunts } from "../utils/mockdata"
import { useState } from "react"

const Body=()=>{
    const [listOfRestraunt,setListOfRestaurants]=useState(restraunts);
    return <>            
                <div className="body" >
                <div className="search"> <input type="text" placeholder="search" /></div>
                <button onClick={
                    ()=>{
                        const filteredRestraunts=listOfRestraunt.filter((restraunt)=>restraunt.info.avgRatingString>="4.4");
                        setListOfRestaurants(filteredRestraunts);
                    }
                    } className="filterButton">
                    Filter</button>
                <div className="restrauntContainer">
                {listOfRestraunt.map((res)=>{
                return < Card info={res.info} key={res.info.id} />
                })}
                  
                 
                </div>
                </div>
            </>

            
}

export default Body;