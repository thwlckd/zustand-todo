import { create } from 'zustand';

interface State {
  activeSection: string;
}

interface Action {
  actions: {
    changeActiveSection: (section: string) => void;
  };
}

const useNavigationStore = create<State & Action>((set) => ({
  activeSection: 'ALL',
  actions: {
    changeActiveSection: (section) => set({ activeSection: section }),
  },
}));

export const useActiveSection = () =>
  useNavigationStore(({ activeSection }) => activeSection);
export const useNavigationActions = () =>
  useNavigationStore(({ actions }) => actions);
