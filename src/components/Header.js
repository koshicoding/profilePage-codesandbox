import profile from "../images/portfolio.jpg";
import { useState, useEffect } from "react";

export default function Header() {
  const [imageData, setImage] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://picsum.photos/200/300").then((data) => setImage(data));
    }, 2000);
  }, [imageData]);

  return (
    <div className="header">
      <img className="profilePic" src={imageData.url}></img>
    </div>
  );
}
