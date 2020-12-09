import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home: React.FC = () => <Wrapper>Home Page Works!!!</Wrapper>;

export default Home;
