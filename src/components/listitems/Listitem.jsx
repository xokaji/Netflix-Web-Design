import { useState } from "react";
import "./listitems.scss";

export default function Listitem({index}) {
  const [isHovered, setIsHovered] = useState(false); 
  const trailer= "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="listItem" style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <img src="https://movienightjournal.com/wp-content/uploads/2022/01/MNJ-Best-Movies-to-Watch-for-National-Movie-Night-Black-Panther-.jpg" alt="picc"/>
        {isHovered && (
      <>
        <video src={trailer} autoPlay={true} loop/> 
        <div className="itemInfo">
          <div className="iteminfotop">
            <span>1 hr 23 mins</span>
            <span className="limit">18+</span>
            <span>2017</span>
          </div>
          <div className="description">
          After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.
          </div>
          <div className="genre">
            Action
          </div>
        </div>
        </>
        )}
    </div>
  )
}
