import React from "react";
import styled from "styled-components";
import { Box } from "../../lib";

import ComponentShowBlock from "../app/shared/components/ComponentShowBlock/ComponentShowBlock";

const Wrapper = styled.div`
  .box {
    padding: 24px;
    border: 1px solid grey;
  }
`;

const ComponentBoxPage: React.FC = () => (
  <Wrapper>
    <ComponentShowBlock title="横向布局">
      <Box width={400}>
        <div className="box">这是左</div>
        <div className="box">这是右</div>
      </Box>
    </ComponentShowBlock>
    <ComponentShowBlock title="纵向布局">
      <Box mode="vertical" height={300}>
        <div className="box">这是上</div>
        <div className="box">这是下</div>
      </Box>
    </ComponentShowBlock>
  </Wrapper>
);

export default ComponentBoxPage;
