import Menu from "./Menu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestrauntData from "../utils/useRestrauntData";
import useOnlineStatus from "../utils/useOnlineStatus";
const Restraunt=()=>{
    const {resId}=useParams();
    // const[menu,setmenu]=useState(null);
    const menu=useRestrauntData(resId);
    const online= useOnlineStatus();
    
    if(online==false) return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>⚠️ Oops! You are offline.</h2>;
    if(menu==null) return <Shimmer/>;
    return(
    
    
    <>
    {console.log(menu[0].card.info.name)}
    {
    menu.map((menuItem)=>{
       return  <Menu item={menuItem} key={menuItem.card.info.id}/>
    }
    )
    }
    </>
    )

}
export default Restraunt;