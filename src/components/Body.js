import Card from "./Card"
import { restraunts } from "../utils/mockdata"
import { useState } from "react"

const Body=()=>{
    const [listOfRestraunt,setListOfRestaurants]=useState(restraunts);
    const [searchText,setSearchText]=useState("");
    return <>            
                <div className="body" >
                <div className="search restraunt" onChange={(e)=>
                    {
                    
                    setSearchText("e.target.value");
                    const filteredRestraunts=listOfRestraunt.filter((restraunt)=>restraunt.info.name.toLowerCase().includes(e.target.value.toLowerCase()))
                    
                    setListOfRestaurants(filteredRestraunts);
                    }
                }> <input type="text" placeholder="search" /></div>
                
                <button onClick={
                    ()=>{
                        const filteredRestraunts=listOfRestraunt.filter((restraunt)=>restraunt.info.avgRatingString>="4.4");
                        setListOfRestaurants(filteredRestraunts);
                    }
                    } className="filterButton">
                    Filter</button>

                <div className="restrauntContainer">
                {listOfRestraunt.map((res)=>{
                    console.log(res.info)
                return < Card info={res.info} key={res.info.id} />
                })}
                  
                 
                </div>
                </div>
            </>

            
}

export default Body;