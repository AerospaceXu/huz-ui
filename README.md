# 胡子 UI（huz-ui）

`npm i huz-ui` 或 `yarn add huz-ui`。

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
