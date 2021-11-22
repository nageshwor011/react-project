import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const Ratings = ({rate, increaseRate, styles}) => {
   
  return (
    <div>
      {/* <AiOutlineStar style={{ color: "orange" }}/> */}
      {[...Array(5)].map((c, i) => {
        return <span  key={i} onClick={(prrExpecting)=>increaseRate(i)} style={styles}>
            {rate > i? <AiFillStar style={{ color: "orange" }}/> : <AiOutlineStar/>
            }
            
            </span> ;
      })}
    </div>
  );
};

export default Ratings;
