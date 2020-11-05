import styled, { keyframes } from 'styled-components';
import React from 'react';

interface Style {
  maskWidth: number;
  zoomTime: number;
}

const zoom = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  
  100% {
    transform: translate(-50%, -50%) scale(1);
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
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    background: rgba(255, 255, 255, 0.32);
    width: ${p => p.maskWidth + 5}px;
    height: ${p => p.maskWidth + 5}px;
    border-radius: 50%; 

    animation: ${zoom} ${p => p.zoomTime}ms ease-in-out;
  }
`;

interface Props {
  buttonWidth: number;
  animateTime: number;
}

const ButtonMask: React.FC<Props> = (props) => {
  const { buttonWidth, animateTime } = props;
  return (
    <Wrapper maskWidth={buttonWidth} zoomTime={animateTime}>
      <span />
    </Wrapper>
  );
};

export default ButtonMask;
