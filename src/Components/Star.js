import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import '../styles/Star.css';

const Star = ({ stars, reviews }) => {
  const rating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    // debugger;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="star-icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="star-icon" />
        ) : (
          <AiOutlineStar className="star-icon" />
        )}
      </span>
    );
  });

  return (
    <div className="star-style">
      {rating}
      <p>({reviews} Customer reviews)</p>
    </div>
  );
};

export default Star;
