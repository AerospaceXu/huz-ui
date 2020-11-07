import React, { MouseEventHandler, useCallback, useState } from 'react';

import Base from './styles/Base';
import Normal from './styles/Normal';
import ButtonMask from './ButtonMask';

import { MaskPosition } from './interfaces/mask-position';
import { ButtonType } from './interfaces/button-type';

import useButton from './hooks/useButton';
import useMask from './hooks/useMask';

const ANIMATE_TIME = 375;

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
}

const Button: React.FC<Props> = (props) => {
  const { onClick, type } = props;

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

  return (
    <Base ref={buttonRef} onClick={handleClick}>
      {maskVisible && (
        <ButtonMask
          buttonSize={buttonSize}
          clickPosition={clickPlace}
          animateTime={ANIMATE_TIME}
        />
      )}
      {type}
      <Normal>
        <span className="button-text-wrapper">按钮</span>
      </Normal>
    </Base>
  );
};

export default Button;
