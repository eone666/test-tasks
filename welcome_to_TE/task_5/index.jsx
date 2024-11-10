import { useState } from "react";

export const BlockWrapper = ({mouseEnterCallback, children}) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallback();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => (
  <BlockWrapper mouseEnterCallback={mouseEnterCallback}>
    <img src={imgSrc} alt={imgAlt} />
  </BlockWrapper>
);

export const Block2 = ({ mouseEnterCallback, content }) => (
  <BlockWrapper mouseEnterCallback={mouseEnterCallback}>
    <p>{content}</p>
  </BlockWrapper>
);

export const Block3 = ({ mouseEnterCallback, userData }) => (
  <BlockWrapper mouseEnterCallback={mouseEnterCallback}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </BlockWrapper>
);
