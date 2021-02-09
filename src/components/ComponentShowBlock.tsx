import React, { useState } from "react";
import styled from "styled-components";

import codeIcon from "../assets/code-icon.svg";

import CodeShowBlock from "./CodeShowBlock";

const Wrapper = styled.div`
  width: calc(100% - 60px);
  padding: 12px 24px 12px;
  margin: 16px 0 24px;
  border: 1px solid rgba(0, 0, 0, 0.12);

  > h3 {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }

  > .components {
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > * {
      margin: 12px;
    }
  }

  > .tools-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 32px;

    > button {
      padding: 6px;
      height: 100%;
      opacity: 0.32;

      background: transparent;
      border: none;
      outline: none;

      cursor: pointer;
      transition: 125ms;

      &:hover {
        opacity: 0.72;
      }

      > img {
        height: 100%;
      }
    }
  }
`;

interface Props {
  title: string;
  code?: string;
}

const ComponentShowBlock: React.FC<Props> = (props) => {
  const { title, code } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [dropContent, setDropContent] = useState<string>("");

  return (
    <Wrapper>
      <h3>{title}</h3>
      <div className="components">{props.children}</div>
      <div className="tools-bar">
        <button
          onClick={() => {
            setDropContent("code");
            setIsVisible((visibility) => !visibility);
          }}
        >
          <img src={codeIcon} alt="" />
        </button>
      </div>
      {code && isVisible && (
        <div className="drop-content">
          <CodeShowBlock>{code}</CodeShowBlock>
        </div>
      )}
    </Wrapper>
  );
};

export default ComponentShowBlock;
