import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import Base from './styles/Base';
import ButtonMask from './ButtonMask';
import Normal from './styles/Normal';

import { MaskPosition } from './interfaces/mask-position';

import { useMask } from './hooks/useMask';

const ANIMATE_TIME = 400;

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = (props) => {
  const { onClick } = props;

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
      let left: number, top: number;
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
    [buttonPlace, handleMaskAnimation, onClick]
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
      <Normal>
        <span className="button-text-wrapper">按钮</span>
      </Normal>
    </Base>
  );
};

export default Button;
