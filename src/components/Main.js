import React from "react";
import ButtonSection from "./ButtonSection";

export default function Main() {
  const [buttonText, setButtonText] = React.useState("hi");

  return (
    <div className="mainWrapper">
      <h1 className="name">{buttonText}</h1>
      <p className="occupation">
        'Fachinformatiker fuer Anwendungsentwicklung'
      </p>
      <p className="link">github.com</p>
      <ButtonSection handleClick={setButtonText} />
      <div className="about">
        <h1 className="aboutHeader">About</h1>
        <p className="aboutContent">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </p>
      </div>
      <div className="interest">
        <h1 className="interestHeader">Interest</h1>
        <p className="interestContent">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </p>
      </div>
    </div>
  );
}
