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

const ANIMATE_TIME = 225;

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = (props) => {
  const { onClick } = props;

  const button = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState<number>(0);

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setButtonWidth(button.current?.clientWidth || 0);
  }, []);

  const toggleActive = useCallback(() => {
    setIsActive(active => !active);
  }, []);

  // useEffect(() => {
  //   if (isActive) {
  //     setTimeout(() => setIsActive(false), ANIMATE_TIME);
  //   } else {
  //     setIsActive(true);
  //   }
  // }, [isActive]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    toggleActive();
    if (onClick) {
      onClick(e);
    }
  }, [onClick, toggleActive]);

  return (
    <Base ref={button} onClick={handleClick}>
      {
        isActive &&
        <ButtonMask buttonWidth={buttonWidth} animateTime={ANIMATE_TIME} />
      }
      <Normal>
        <span className='button-text-wrapper'>
          按钮
        </span>
      </Normal>
    </Base>
  );
};

export default Button;
