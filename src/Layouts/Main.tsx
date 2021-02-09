import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  margin: 24px auto 0;
  max-width: 768px;
  padding: 0 24px;
`;

const Main: React.FC = (props) => <Wrapper>{props.children}</Wrapper>;

export default Main;
