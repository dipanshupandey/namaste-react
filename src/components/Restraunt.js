import { useEffect,useState } from "react";
import Menu from "./Menu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const Restraunt=()=>{
    const {resId}=useParams();
    
    const[menu,setmenu]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>
    {
        const res=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId);
        const data=await res.json();
        // console.log(data.data.cards)
        console.log("->",data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards,"<-");
        console.log("->",data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards,"<-");
        const newData=data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;
        for(let i=0;i<newData.length;i++)
        {
            console.log("->",newData[i].card.card.itemCards,"<-");
            if(newData[i].card.card.itemCards)
            {
                setmenu(newData[i].card.card.itemCards);
                break;
            }
        }
        

    };


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