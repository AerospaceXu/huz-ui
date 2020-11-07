import React from 'react';

import Button from '../components/Button';

const Home: React.FC = () => (
  <div>
    <h1>Home page works!</h1>
    <Button>普通按钮</Button>
    <Button type="danger">警告按钮</Button>
  </div>
);

export default Home;
