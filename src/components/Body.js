import Card from "./Card"
import { useState,useEffect } from "react"

const Body=()=>{
    const [listOfRestraunt,setListOfRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await fetch(
              "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            let data = await response.json();
            data=data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurants(data);
            console.log(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []); // empty dependency → runs only once on mount
      

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
                    // console.log(res.info)
                return < Card info={res.info} key={res.info.id} />
                })}
                  
                 
                </div>
                </div>
            </>

            
}

export default Body;