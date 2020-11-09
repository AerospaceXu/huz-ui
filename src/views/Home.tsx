import React, { useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';

const Home: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <div>
      <h1>Home page works!</h1>
      <Button>普通按钮</Button>
      <Button isContained={false}>普通按钮</Button>
      <Button type="danger">警告按钮</Button>
      <Button type="danger" isContained={false}>
        警告按钮
      </Button>
      <Button type="link">链接按钮</Button>
      <Button type="danger" disable>
        链接按钮
      </Button>
      <br />
      <Input label="姓名" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default Home;
