import React, { MouseEventHandler, useCallback, useState } from 'react';
import { StyledComponent } from 'styled-components';

import Base from './styles/Base';
import Normal from './styles/Normal';
import Danger from './styles/Danger';
import ButtonMask from './ButtonMask';

import { MaskPosition } from './interfaces/mask-position';
import { ButtonType } from './interfaces/button-type';

import useButton from './hooks/useButton';
import useMask from './hooks/useMask';

const ANIMATE_TIME = 375;

const typeHash: {
  [key: string]: StyledComponent<'span', any, {}, never>;
} = {
  normal: Normal,
  danger: Danger,
};

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
}

const Button: React.FC<Props> = (props) => {
  const { onClick, type, children } = props;

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

  const StyleWrapper = type ? typeHash[type] : Normal;

  return (
    <Base ref={buttonRef} onClick={handleClick}>
      {maskVisible && (
        <ButtonMask
          buttonSize={buttonSize}
          clickPosition={clickPlace}
          animateTime={ANIMATE_TIME}
        />
      )}

      <StyleWrapper>
        <span className="button-text-wrapper">{children}</span>
      </StyleWrapper>
    </Base>
  );
};

export default Button;
