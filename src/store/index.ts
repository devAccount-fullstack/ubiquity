import { create } from 'zustand';

interface CreateEventState {
  showConsent: boolean;
}

interface Action {
  setShowConsent: (value: boolean) => void;
}

const useStore = create<CreateEventState & Action>(set => ({
  showConsent: false,
  setShowConsent: value => set(() => ({ showConsent: value })),
}));

export default useStore;
