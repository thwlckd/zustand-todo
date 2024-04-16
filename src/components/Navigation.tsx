import { Children } from 'react';
import styled from 'styled-components';
import {
  useActiveSection,
  useNavigationActions,
} from '../store/useNavigationStore';

const TABS = ['ALL', 'ACTIVE', 'DONE'];

const Navigation = () => {
  const activeSection = useActiveSection();
  const { changeActiveSection } = useNavigationActions();

  return (
    <NavigationWrpper>
      {Children.toArray(
        TABS.map((tab) => (
          <li>
            <TabButton
              onClick={() => changeActiveSection(tab)}
              $isActive={tab === activeSection}
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
