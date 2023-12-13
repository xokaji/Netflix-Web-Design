import { useRef, useState } from "react";
import Listitem from "../listitems/Listitem";
import "./list.scss";

export default function List() {

  const [slideNum, setSlideNum] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance  = listRef.current.getBoundingClientRect().x - 50
    if(direction === "left" && slideNum > 0){
      setSlideNum(slideNum - 1)
      listRef.current.style.transform =`translateX(${230 + distance}px)`
    }
    if(direction === "right" && slideNum < 5){
      setSlideNum(slideNum + 1)
      listRef.current.style.transform=`translateX(${-230 + distance}px)`
    }
    
  } 

  return (
    <div className="list">
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <span class="material-symbols-outlined" id="leftArrow" onClick={() => handleClick("left")} style={{display: !isMoved && "none"}}>chevron_left</span>
        <div className="container" ref={listRef}>
          <Listitem index={0}/>
          <Listitem index={1}/>
          <Listitem index={2}/>
          <Listitem index={3}/>
          <Listitem index={4}/>
          <Listitem index={5}/>
          <Listitem index={6}/>
          <Listitem index={7}/>
          <Listitem index={8}/>
          <Listitem index={9}/>
          <Listitem index={10}/>
                
         
        </div>
        <span class="material-symbols-outlined" id="rightArrow" onClick={() => handleClick("right")}>chevron_right</span>
      </div>
    </div>
  )
}
