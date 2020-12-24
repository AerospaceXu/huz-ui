import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  height: 88px;
  padding: 0 24px;
  margin-bottom: 32px;

  > ul {
    height: 100%;
    width: 100%;
    padding-bottom: 12px;
    max-width: 1200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.54);
    align-items: flex-end;

    > li {
      margin: 0 24px;
      font-size: 20px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.64);
      transition: 0.3s cubic-bezier(1, 0.5, 0.8, 1);

      &:hover {
        color: rgba(0, 0, 0, 0.87);
      }

      > a.nav-active {
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
`;

const Nav: React.FC = () => (
  <Wrapper className="center">
    <ul className="center">
      <li>
        <NavLink to="/" activeClassName="nav-active" exact>
          首页
        </NavLink>
      </li>
      <li>
        <NavLink to="/buttons" activeClassName="nav-active" exact>
          按钮
        </NavLink>
      </li>
      <li>
        <NavLink to="/inputs" activeClassName="nav-active" exact>
          输入框
        </NavLink>
      </li>
    </ul>
  </Wrapper>
);

export default Nav;
