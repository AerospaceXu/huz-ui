import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeShowBlock: React.FC = (props) => (
  <SyntaxHighlighter language="tsx" style={dark}>
    {props.children}
  </SyntaxHighlighter>
);

export default CodeShowBlock;
