// код для легкого открытия или закрытия popup окна
// zustand

import { create } from 'zustand';

type PopupProps = {
    PopupShow: boolean;
    PopupToggleShow: () => void;
};

const usePopupStore = create<PopupProps>((set) => ({
    PopupShow: false,
    PopupToggleShow: () => set((state) => ({ PopupShow: !state.PopupShow }))
}));

export default usePopupStore;
