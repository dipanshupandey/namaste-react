import { useEffect,useState } from "react";
const Restraunt=()=>{
    const[menu,setmenu]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>
    {
        const res=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=385824&submitAction=ENTER");
        const data=await res.json();
        console.log("->",data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title,"<-");
        setmenu(data.data.cards[5]);

    };


    return(
    
    <>
    <div><h1>RES NAME</h1></div>
    <div>
        <span>ratings</span>
        <span>cost</span>
        <div>cusines</div>
        <div>time</div>
    </div>
    </>
    )

}
export default Restraunt;