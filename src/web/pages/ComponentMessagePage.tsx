import React from "react";
import styled from "styled-components";
import { Message, Button, message } from "../../lib";

import ComponentShowBlock from "../app/shared/components/ComponentShowBlock/ComponentShowBlock";

const Wrapper = styled.div`
  width: 100%;
`;

const ComponentInputPage: React.FC = () => (
  <Wrapper>
    <ComponentShowBlock title="Input 样式">
      <Message messageType="success" text="这是一条成功提醒" />
      <Message messageType="error" text="这是一条失败提醒" />
    </ComponentShowBlock>
    <Button
      type="primary"
      onClick={() => {
        message({ messageType: "success", text: "lalala" });
      }}
    >
      触发 Message
    </Button>
  </Wrapper>
);

export default ComponentInputPage;
