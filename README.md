# 胡子 UI（huz-ui）

`npm i huz-ui` 或 `yarn add huz-ui`。

*目前只完美兼容 Chrome，其他浏览器会出现 Bug。*

胡子 UI 参考了 Google Material Design 与 Apple Human Interface Design
进行设计，旨在打造高效、通用、美观清爽、用户友好的组件库。

全部使用 React + TypeScript 编写。

已有组件：

1. Button 按钮组件
2. Input 输入框组件
3. Message 全局提示组件

例子：

```tsx
import React, { useEffect, useState } from 'react';

import { Button, Input, message } from 'huz-ui';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleClick = () => alert(`${value}已删除！`);

  useEffect(() => {
    message({
      type: 'success',
      text: '页面加载完成',
    })
  }, [])

  return (
    <div>
      <Input
        label="值"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="danger" onClick={handleClick}>
        删除
      </Button>
    </div>
  );
};

export default App;
```
