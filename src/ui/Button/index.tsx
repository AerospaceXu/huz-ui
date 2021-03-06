import React, { MouseEventHandler, useCallback, useState } from "react";

import "./styles/index.scss";

import ButtonMask from "./ButtonMask";

import { MaskPosition } from "./interfaces/mask-position";
import { ButtonType } from "./interfaces/button-type";

import useButton from "./hooks/useButton";
import useMask from "./hooks/useMask";

const ANIMATE_TIME = 325;

const typeHash: {
  [key: string]: string;
} = {
  normal: "huz-normal-button",
  primary: "huz-primary-button",
  danger: "huz-danger-button",
  link: "huz-link-button",
};

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  isContained?: boolean;
  disable?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    onClick, type, isContained, disable, children, className,
  } = props;

  const { buttonRef, buttonSize, computeClickPlace } = useButton();

  const [clickPlace, setClickPlace] = useState<MaskPosition | null>(null);

  const { handleMaskAnimation, maskVisible } = useMask(ANIMATE_TIME);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (disable) {
        return;
      }
      const clickRes = computeClickPlace(e);
      if (clickRes) {
        const { left, top } = clickRes;
        setClickPlace({ left, top });
      }
      handleMaskAnimation();
      if (onClick) {
        onClick(e);
      }
    },
    [computeClickPlace, disable, handleMaskAnimation, onClick],
  );

  const buttonExtraClassName = type ? typeHash[type] : typeHash.normal;

  const buttonClassName = `huz-button ${
    isContained === undefined || isContained ? "huz-button-contained" : ""
  } ${disable ? "huz-disable-button" : buttonExtraClassName} ${
    className || ""
  }`;

  return (
    <button className={buttonClassName} ref={buttonRef} onClick={handleClick}>
      {maskVisible && type !== "link" && (
        <ButtonMask
          buttonSize={buttonSize}
          clickPosition={clickPlace}
          animateTime={ANIMATE_TIME}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
