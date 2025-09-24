import Menu from "./Menu";
import { useState } from "react";
const RestrauntMenu=({items,isActive,newIndex,index,setIndex})=>{ 
   console.log(setIndex,"->>");
    const [arrow,setArrow]= useState("↓")
  return <>  
        
        <div className="bg-white">
          <div className="flex justify-between cursor-pointer " onClick={()=>{
            newIndex==index?setIndex(null):setIndex(newIndex);
          }} >
            <h1 className="text-xl font-bold ">
              {`${items.title}(${items.itemCards.length})`}
            </h1>
            <span className="text-3xl font-extrabold cursor-pointer" >
              {arrow}
            </span>
          </div>

          {isActive &&
            items.itemCards &&
            items.itemCards.map((item) => {
              return <Menu item={item} key={item.card.info.id} />;
            })}
        </div>
      
      </>
}


export default RestrauntMenu;