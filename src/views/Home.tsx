import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import guide from '../docs/guide.md';

const Wrapper = styled.div`
  width: 100%;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home: React.FC = () => (
  <Wrapper>
    <article
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: guide }}
    />
  </Wrapper>
);

export default Home;
