import Card from "./Card"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import {Link} from "react-router"

const Body=()=>{
    
    const [listOfRestraunt,setListOfRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);//master list so the data doest gets lost
    

    useEffect(() => {
      
      
        const fetchData = async () => {
          try {
            
            let response = await fetch(
              "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=30.2685607&lng=78.00710389999999&carousel=true&third_party_vendor=1",
              
            );
            console.log("->",response)
            let data = await response.json();
            
            // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            data=data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
            
            setListOfRestaurants(data);
            setAllRestaurants(data);
            
          } catch (error) {
            console.log("Error fetching data:", error);
          }
        };
      
        fetchData();
      },[]); 
      

    
     if(!listOfRestraunt||listOfRestraunt.length==0)
     return <Shimmer/>;
      return  <>            
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
                return <Link to={"restraunt/"+res.info.id} key={res.info.id} >< Card info={res.info} /></Link>
                })}
                  
                 
                </div>
                </div>
            </>

            
}

export default Body;