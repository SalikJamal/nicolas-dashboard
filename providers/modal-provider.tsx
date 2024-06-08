"use client"

import { useEffect, useState } from "react"
import InviteMembersModal from "@/components/modals/invite-members-modal"


export default function ModalProvider() {
    
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) return null

    return (
        <InviteMembersModal />
    )
}