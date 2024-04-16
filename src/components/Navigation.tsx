import { Children, useState } from 'react';
import styled from 'styled-components';

const TABS = ['ALL', 'ACTIVE', 'COMPLETE'];

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <NavigationWrpper>
      {Children.toArray(
        TABS.map((tab) => (
          <li>
            <TabButton
              onClick={() => setActiveTab(tab)}
              $isActive={tab === activeTab}
            >
              {tab}
            </TabButton>
          </li>
        )),
      )}
    </NavigationWrpper>
  );
};

export default Navigation;

const NavigationWrpper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
  width: 100%;
  font-size: 20px;
`;

const TabButton = styled.button<{ $isActive: boolean }>`
  cursor: pointer;
  text-decoration: ${({ $isActive }) => ($isActive ? 'underline' : 'none')};

  &:hover {
    text-decoration: underline;
  }
`;
