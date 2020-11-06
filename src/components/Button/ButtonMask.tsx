import styled, { keyframes } from 'styled-components';
import React, { useEffect, useState } from 'react';

interface Style {
  maskRadius: number;
  maskPlace: number[];
  zoomTime: number;
}

const zoom = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  
  61.8% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.span<Style>`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  > span {
    position: absolute;
    left: ${(p) => (p.maskPlace[0] === -1 ? '50%' : p.maskPlace[0] + 'px')};
    top: ${(p) => (p.maskPlace[0] === -1 ? '50%' : p.maskPlace[1] + 'px')};
    transform: translate(-50%, -50%);

    background: rgba(255, 255, 255, 0.32);
    width: ${(p) => p.maskRadius * 2}px;
    height: ${(p) => p.maskRadius * 2}px;
    border-radius: 50%;

    animation: ${zoom} ${(p) => p.zoomTime}ms cubic-bezier(1, 0.5, 0.8, 1);
    opacity: 0;
  }
`;

const getString = (hook: number, strands: number) => {
  return Math.sqrt(Math.pow(hook, 2) + Math.pow(strands, 2));
};

interface Props {
  buttonSize: {
    width: number;
    height: number;
  };
  clickPlace: number[];
  animateTime: number;
}

const ButtonMask: React.FC<Props> = (props) => {
  const { buttonSize, animateTime, clickPlace } = props;

  const [maskRadius, setMaskRadius] = useState<number>(
    getString(buttonSize.width, buttonSize.height)
  );
  const [maskPlace, setMaskPlace] = useState<number[]>([-1, -1]);

  useEffect(() => {
    if (clickPlace[0] !== -1) {
      const x =
        clickPlace[0] > buttonSize.width / 2
          ? clickPlace[0]
          : buttonSize.width - clickPlace[0];
      const y =
        clickPlace[1] > buttonSize.height / 2
          ? clickPlace[1]
          : buttonSize.height - clickPlace[1];
      setMaskRadius(getString(x, y));
    }
    setMaskPlace([...clickPlace]);
  }, [buttonSize, clickPlace]);

  return (
    <Wrapper
      maskRadius={maskRadius}
      maskPlace={maskPlace}
      zoomTime={animateTime}
    >
      <span />
    </Wrapper>
  );
};

export default ButtonMask;
