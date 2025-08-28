import Card from "./Card"
import { restraunts } from "../utils/mockdata"
const Body=()=>{
    return <>            
                <div className="body" >
                <div className="search"> <input type="text" placeholder="search" /></div>
                <div className="restrauntContainer">
                {restraunts.map((res)=>{
                return < Card info={res.info} key={res.info.id} />
                })}
                  
                 
                </div>
                </div>
            </>

            
}

export default Body;