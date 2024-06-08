import { create } from "zustand"

interface IInviteModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useInviteModal = create<IInviteModalStore>(set => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))


export default useInviteModal