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

      
    
        return <div className="card">
            <div className="cardimage">
                <img src={CDN_URL+cloudinaryImageId} alt="IMAGE"  />
            </div>
            
            <div className="info">
                <h4>{name}</h4>
                
                <div className="rating-time">
                    <span>{avgRatingString} <i className="fa-solid fa-star"></i></span>
                    
                    <span>{sla.deliveryTime+"mins"}</span>
                </div>
                <div>
                <h5 className="trim-text">{cuisines.join(", ")}</h5>
                <h3>{areaName}</h3>
                <h4>{costForTwo}</h4>
            </div>
            </div>

            
        </div>
}


export default Card;