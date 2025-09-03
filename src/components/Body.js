import Card from "./Card"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";

const Body=()=>{
    
    const [listOfRestraunt,setListOfRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);//master list so the data doest gets lost
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            
            let response = await fetch(
              "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            let data = await response.json();
            data=data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurants(data);
            setAllRestaurants(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []); // empty dependency → runs only once on mount
      

    
     
      return listOfRestraunt.length==0?  <Shimmer/>: <>            
                <div className="body" >
                <div className="search " >
                   <input type="text" placeholder="search"   onChange={(e)=>
                    {
                    setSearchText(e.target.value);
                    }
                }/>
                <button className="searchButton" onClick={()=>{
                  
                  const filteredRestraunts=allRestaurants.filter((restraunt)=>restraunt.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    
                  setListOfRestaurants(filteredRestraunts);
                  
                }}>Search</button>
                </div>
                
                <button onClick={
                    ()=>{
                        const filteredRestraunts=allRestaurants.filter((restraunt)=>restraunt.info.avgRatingString>=4.0);
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