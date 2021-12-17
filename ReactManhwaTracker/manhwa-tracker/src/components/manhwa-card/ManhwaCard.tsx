import React, { useState } from "react";
import Manhwa from "../../models/Manhwa";
import styles from "./ManhwaCard.module.scss";
export const ManhwaCard: React.FC<{ manhwa: Manhwa }> = ({ manhwa }) => {
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
      <p>{manhwa.title}</p>
    </div>
  );
};
