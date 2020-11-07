import styled from 'styled-components';

const Base = styled.button`
  position: relative;
  margin: 50px;
  border: none;
  outline: none;

  background: transparent;

  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);

  cursor: pointer;
  user-select: none;

  transition: 275ms linear;

  .button-text-wrapper {
    display: block;
    width: 100%;
    height: 100%;
    padding: 6px 16px;
  }
`;

export default Base;
