// код для легкого отслеживания того что таймер закончил отчет
// zustand

import { create } from 'zustand';

type TimeoutProps = {
    show: boolean;
    toggleShow: () => void;
};

const useTimeoutStore = create<TimeoutProps>((set) => ({
    show: true,
    toggleShow: () => set((state) => ({ show: !state.show }))
}));

export default useTimeoutStore;
