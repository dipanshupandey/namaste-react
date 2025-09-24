import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestrauntData from "../utils/useRestrauntData";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestrauntMenu from "./RestrauntMenu";
import { useState } from "react";
const Restraunt = () => {
  const { resId } = useParams();
  // const[menu,setmenu]=useState(null);
  const menu = useRestrauntData(resId);
  const online = useOnlineStatus();
  const [index,setindex]=useState(null);

  if (menu)
    if (online == false)
      // console.log(menu[5].groupedCard.cardGroupMap.REGULAR.cards,"<---");
      return (
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          ⚠️ Oops! You are offline.
        </h2>
      );
  if (menu == null) return <Shimmer />;
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col w-7/12 gap-4 bg-gray-100">
        <h1 className="text-4xl font-bold m-4 p-4  h-14 bg-white">{menu[0].card.card.text}</h1>
        {menu[5].groupedCard.cardGroupMap.REGULAR.cards.map((item,i) => {
            console.log(index);                                                                         
          return item.card.card.itemCards && <RestrauntMenu items={item.card.card} isActive={i===index} newIndex={i} index={index} setIndex={setindex} key={item.card.card.categoryId}/>
        
        })}
      </div>
    </div>
  );
};
export default Restraunt;
