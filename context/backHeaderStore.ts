import { ReactNode } from "react";
import { create } from "zustand";

type BackHeaderStore = {
  title: string;
  setTitle: (title: string) => void;
  subtitle: string;
  setSubTitle: (title: string) => void;
  etcButton: ReactNode;
  setEtcButton: (etcButton: ReactNode) => void;
  etcCallback: () => void;
  setEtcCallback: (etcCallback: () => void) => void;
};

const useBackHeaderStore = create<BackHeaderStore>((set) => ({
  title: "",
  setTitle: (title: string) => set({ title }),
  subtitle: "",
  setSubTitle: (subtitle: string) => set({ subtitle }),
  etcButton: null,
  setEtcButton: (etcButton: ReactNode) => set({ etcButton }),
  etcCallback: () => {},
  setEtcCallback: (etcCallback: () => void) => set({ etcCallback }),
}));

export const useBackHeader = () => {
  const title = useBackHeaderStore((state) => state.title);
  const setTitle = useBackHeaderStore((state) => state.setTitle);

  const subTitle = useBackHeaderStore((state) => state.subtitle);
  const setSubTitle = useBackHeaderStore((state) => state.setSubTitle);

  const etcButton = useBackHeaderStore((state) => state.etcButton);
  const setEtcButton = useBackHeaderStore((state) => state.setEtcButton);

  const etcCallback = useBackHeaderStore((state) => state.etcCallback);
  const setEtcCallback = useBackHeaderStore((state) => state.setEtcCallback);
  return { title, setTitle, subtitle: subTitle, setSubTitle, etcButton, setEtcButton, etcCallback, setEtcCallback };
};
