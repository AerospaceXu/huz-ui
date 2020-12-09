# 胡子 UI（huz-ui）

`npm i huz-ui` 或 `yarn add huz-ui`。

胡子 UI 参考了 Google Material Design 与 Apple Human Interface Design
进行设计，旨在打造高效、通用、美观清爽、用户友好的组件库。

例子：

```tsx
import React, { useState } from 'react';

import { Button, Input } from 'huz-ui';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleClick = () => alert(`${value}已删除！`);

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
