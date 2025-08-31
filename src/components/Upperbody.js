const Upperbody=()=>{
  return   <>
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
</>
}

export default Upperbody;