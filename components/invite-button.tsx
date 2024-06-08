"use client"

import { UserPlus } from "lucide-react"
import useInviteModal from "@/hooks/use-invite-modal"


export default function InviteButton() {
    
    const inviteModal = useInviteModal()
    
    return (
        <UserPlus className="size-6 cursor-pointer" onClick={inviteModal.onOpen} />
    )
}