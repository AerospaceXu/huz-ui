import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import Base from './styles/Base';
import Normal from './styles/Normal';
import ButtonMask from './ButtonMask';

import { MaskPosition } from './interfaces/mask-position';
import { ButtonType } from './interfaces/button-type';

import { useMask } from './hooks/useMask';

const ANIMATE_TIME = 375;

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
}

const Button: React.FC<Props> = (props) => {
  const { onClick, type } = props;

  const button = useRef<HTMLButtonElement>(null);
  const [buttonPlace, setButtonPlace] = useState<DOMRect | null>(null);
  const [buttonSize, setButtonSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    setButtonSize({
      width: button.current?.clientWidth || 0,
      height: button.current?.clientHeight || 0,
    });
    setButtonPlace(button.current?.getBoundingClientRect() || null);
  }, []);

  const [clickPlace, setClickPlace] = useState<MaskPosition | null>(null);

  const { handleMaskAnimation, maskVisible } = useMask(ANIMATE_TIME);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      let left: number;
      let top: number;
      if (buttonPlace) {
        left = e.pageX - buttonPlace.left;
        top = e.pageY - buttonPlace.top;
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
    <Base ref={button} onClick={handleClick}>
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
