import React, { useState } from "react";
import styles from "./ManhwaCard.module.scss";
export const ManhwaCard = ({ manhwa }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };
  const handleHoverEnd = () => {
    setHover(false);
  };
  return (
    <div onMouseOver={handleHover} onMouseLeave={handleHoverEnd}>
      {hover ? <p>yes</p> : <p>no</p>}
    </div>
  );
};
