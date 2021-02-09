import React, { useEffect, useState } from "react";

import "./styles/button-mask-style.scss";

import { MaskPosition } from "./interfaces/mask-position";

const getString = (hook: number, strands: number) =>
  Math.sqrt(hook ** 2 + strands ** 2);

interface Props {
  buttonSize: {
    width: number;
    height: number;
  };
  clickPosition: MaskPosition | null;
  animateTime: number;
}

const ButtonMask: React.FC<Props> = (props) => {
  const { buttonSize, animateTime, clickPosition } = props;

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
  }, [buttonSize.height, buttonSize.width, clickPosition]);

  return (
    <div className="huz-button-mask">
      <span
        style={{
          animationDuration: `${animateTime}ms`,
          width: `${maskRadius * 2}px`,
          height: `${maskRadius * 2}px`,
          left: `${!maskPosition ? "50%" : `${maskPosition.left}px`}`,
          top: `${!maskPosition ? "50%" : `${maskPosition.top}px`}`,
        }}
      />
    </div>
  );
};

export default ButtonMask;
