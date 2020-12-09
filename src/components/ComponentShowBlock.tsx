import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  padding: 12px 24px 32px;
  margin: 16px 0 24px;
  border: 1px solid rgba(0, 0, 0, 0.12);

  > h3 {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }

  > .components {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
`;

interface Props {
  title: string;
}

const ComponentShowBlock: React.FC<Props> = (props) => (
  <Wrapper>
    <h3>{props.title}</h3>
    <div className="components">{props.children}</div>
  </Wrapper>
);

export default ComponentShowBlock;
