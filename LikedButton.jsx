import React from "react";
import { useState } from "react";

function LikedButton() {
  const [isLiked, setIsLiked] = useState(true);
  const [count, setCount] = useState(0);

  const Togglebut = () => {
    setIsLiked(!isLiked);
  };

  const IncreasCount = () => {
    setCount(count + 1);
  };

  const DicreasCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="photo">
      <h3>Rafaella Mendes</h3>

      <img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
      />

      <p onClick={Togglebut}style={{display:"flex", justifyContent:"center", alignItems:"center",gap:"5px"}}>
        Like &nbsp;
        {isLiked ? (
          <i className="fa-regular fa-heart" onClick={IncreasCount}></i>
        ) : (
          <i
            className="fa-solid fa-heart"
            style={{ color: "red" }}
            onClick={DicreasCount}
          ></i>
        )}
        <p>{count}</p>
      </p>
    </div>
  );
}

export default LikedButton;
