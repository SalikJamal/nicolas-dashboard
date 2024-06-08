"use client"

import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle 
} from "@/components/ui/dialog"

interface IModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}


export const Modal: React.FC<IModalProps> = ({ title, description, isOpen, onClose, children }) => {

    const onChange = (open: boolean) => {
        if(!open) onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent className="p-8 max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="font-semibold text-4xl">{title}</DialogTitle>
                    <DialogDescription className="text-black/65 text-sm">{description}</DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}