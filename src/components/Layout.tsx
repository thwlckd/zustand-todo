import { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header>Zustand Todos</Header>
      {children}
      <Footer>
        <p>
          Created by <Strong>Hyub2</Strong>
        </p>
        <p>
          Series of <Strong>Todo App</Strong> using{' '}
          <Strong>State Management Libraries</Strong>
        </p>
      </Footer>
    </LayoutWrapper>
  );
};
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
`;

export default Layout;

const Header = styled.header`
  padding: 50px 0;
  color: #2c4251;
  font-size: 48px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-top: 100px;
  color: gray;
`;

const Strong = styled.strong`
  color: black;
  font-size: 18px;
`;
