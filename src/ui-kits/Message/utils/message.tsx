import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../index';

interface Props {
  messageType: 'success' | 'error';
  text: string;
}

const Messages: JSX.Element[] = [];

const message = ({ messageType, text }: Props) => {
  const messageOuterWrapper = document.body.querySelector(
    '#huz-message-outer-wrapper',
  );
  if (!messageOuterWrapper) {
    const div = document.createElement('div');
    div.id = 'huz-message-outer-wrapper';
    div.style.position = 'fixed';
    div.style.left = '0';
    div.style.top = '0';
    div.style.width = `${document.documentElement.clientWidth}px`;
    div.style.height = `${document.documentElement.clientHeight}px`;
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.pointerEvents = 'none';
    div.style.zIndex = '100';
    document.body.appendChild(div);
  }
  const newWrapper = document.getElementById(
    'huz-message-outer-wrapper',
  ) as HTMLDivElement;
  Messages.push(
    <Message messageType={messageType} text={text} key={Math.random()} />,
  );
  ReactDOM.render(<div>{Messages}</div>, newWrapper);
  setTimeout(() => {
    Messages.shift();
    ReactDOM.render(<div>{Messages}</div>, newWrapper);
    if (
      Messages.length === 0
      && document.querySelector('#huz-message-outer-wrapper')
    ) {
      document.body.removeChild(
        document.querySelector('#huz-message-outer-wrapper') as HTMLDivElement,
      );
    }
  }, 3000);
};
export default message;
