import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Ratings = ({ rating, starClick, style }) => {


  
  return (
    <>
      {[...Array(5)].map((c, i) => {
        return (
          <span key={i} onClick={(p)=>starClick(i)} style={style}>
            {rating > i ? <AiFillStar  color="orange"/> : <AiOutlineStar />}
          </span>
        );
      })}

     
    </>
  );
};

export default Ratings;
