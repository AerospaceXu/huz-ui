import styled, { keyframes } from 'styled-components';
import React, { useEffect, useState } from 'react';

import { MaskPosition } from './interfaces/mask-position';

interface Style {
  maskRadius: number;
  maskPosition: MaskPosition | null
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
    left: ${(p) => (!p.maskPosition ? '50%' : p.maskPosition.left + 'px')};
    top: ${(p) => (!p.maskPosition ? '50%' : p.maskPosition.top + 'px')};
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
  clickPosition: MaskPosition | null;
  animateTime: number;
}

const ButtonMask: React.FC<Props> = (props) => {
  const { buttonSize, animateTime, clickPosition } = props

  const [maskRadius, setMaskRadius] = useState<number>(
    getString(buttonSize.width, buttonSize.height),
  );
  const [maskPosition, setMaskPosition] = useState<MaskPosition | null>(null);

  useEffect(() => {
    if (clickPosition) {
      const { left, top } = clickPosition;
      const x = left > buttonSize.width / 2 ? left : buttonSize.width - left;
      const y = top > buttonSize.height / 2 ? top : buttonSize.height - top;
      const radius = getString(x, y);

      setMaskRadius(radius);
      setMaskPosition({ ...clickPosition });
    }
  }, [buttonSize, clickPosition]);

  return (
    <Wrapper
      maskRadius={maskRadius}
      maskPosition={maskPosition}
      zoomTime={animateTime}
    >
      <span />
    </Wrapper>
  );
};

export default ButtonMask;
