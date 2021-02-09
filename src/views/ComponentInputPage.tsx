import React, { useState } from "react";
import styled from "styled-components";

import ComponentShowBlock from "../components/ComponentShowBlock";
import Input from "../ui-kits/Input";

import { InputUseCode, InputWidthCode } from "../docs/codes/Input-demo";

const Wrapper = styled.div`
  width: 100%;
`;

const ComponentInputPage: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <Wrapper>
      <ComponentShowBlock title="Input 样式" code={InputUseCode}>
        <Input label="姓名" value={value} onChange={handleInputChange} />
      </ComponentShowBlock>
      <ComponentShowBlock title="自定义长度" code={InputWidthCode}>
        <Input
          label="姓名"
          value={value}
          onChange={handleInputChange}
          inputWidth={400}
        />
        <Input
          label="姓名"
          value={value}
          onChange={handleInputChange}
          inputWidth={200}
        />
        <Input
          label="姓名"
          value={value}
          onChange={handleInputChange}
          inputWidth={100}
        />
      </ComponentShowBlock>
    </Wrapper>
  );
};

export default ComponentInputPage;
