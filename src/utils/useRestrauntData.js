import { useEffect, useState } from "react";

const useRestrauntData=(resId)=>{
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
    fetchData();
   },[]);

    const fetchData=async()=>
    {
        const res=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId);
        
        const data=await res.json();
        console.log(data.data.cards);
        // const newData=data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;
        // for(let i=0;i<newData.length;i++)
        // {
        //     // console.log("->",newData[i].card.card.itemCards,"<-");
        //     if(newData[i].card.card.itemCards)
        //     {
                
        //         setresInfo(newData[i].card.card.itemCards);
        //         break;
        //     }
        // }
        setresInfo(data.data.cards);
       
        
    };
    return resInfo;
}

export default useRestrauntData;