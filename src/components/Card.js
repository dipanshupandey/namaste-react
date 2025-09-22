import { CDN_URL} from "../utils/constants";

const Card=({info})=>{
    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        areaName,
        costForTwo,
        sla,
      } = info;

      
    
        return <div className="card dark:bg-gray-900 ">
            <div className="cardimage">
                <img src={CDN_URL+cloudinaryImageId} alt="IMAGE"  />
            </div>
            
            <div className="info">
                <h4 className="text-[#333] dark:text-amber-50">{name}</h4>
                
                <div className="rating-time text-[#555] ">
                    <span className="text-white">{avgRatingString} <i className="fa-solid fa-star"></i></span>
                    
                    <span className="text-[#777] dark:text-white">{sla.deliveryTime+" mins"}</span>
                </div>
                <div>
                <h5 className="trim-text text-[777] dark:text-white overflow-hidden">{cuisines.join(", ")}</h5>
                <h3 className="text-[#555] dark:text-white">{areaName}</h3>
                <h4 className=" text-[#222] dark:text-white">{costForTwo}</h4>
            </div>
            </div>

            
        </div>
}


export default Card;