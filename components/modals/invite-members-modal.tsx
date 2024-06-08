import { Modal } from "@/components/ui/modal"
import useInviteModal from "@/hooks/use-invite-modal"


export default function InviteMembersModal() {
    
    const inviteModal = useInviteModal()
    
    return (
        <Modal
            isOpen={inviteModal.isOpen}
            onClose={inviteModal.onClose} 
            title="Invite members" 
            description="Invite new members to this organization"
        >
            <h1>Hi</h1>
        </Modal>
    )
}