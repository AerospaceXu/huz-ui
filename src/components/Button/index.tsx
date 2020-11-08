import React, { MouseEventHandler, useCallback, useState } from 'react';

import Base from './styles/Base';
import ButtonMask from './ButtonMask';

import { MaskPosition } from './interfaces/mask-position';
import { ButtonType } from './interfaces/button-type';

import useButton from './hooks/useButton';
import useMask from './hooks/useMask';

const ANIMATE_TIME = 375;

const typeHash: {
  [key: string]: string;
} = {
  normal: 'normal-button',
  danger: 'danger-button',
  link: 'link-button',
};

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  isContained?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    onClick, type, isContained, children, className,
  } = props;

  const {
    buttonRef, buttonPlace, buttonSize, computeClickPlace,
  } = useButton();

  const [clickPlace, setClickPlace] = useState<MaskPosition | null>(null);

  const { handleMaskAnimation, maskVisible } = useMask(ANIMATE_TIME);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    [buttonPlace, handleMaskAnimation, onClick],
  );

  const buttonExtraClassName = type ? typeHash[type] : typeHash.normal;

  return (
    <Base
      className={`${buttonExtraClassName} ${className || ''}`}
      ref={buttonRef}
      onClick={handleClick}
      isContained={isContained !== undefined ? isContained : true}
    >
      {maskVisible && type !== 'link' && (
        <ButtonMask
          buttonSize={buttonSize}
          clickPosition={clickPlace}
          animateTime={ANIMATE_TIME}
        />
      )}
      {children}
    </Base>
  );
};

export default Button;
