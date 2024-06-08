"use client"

import z from "zod"
import { useState } from "react"
import { Tag, TagInput } from "emblor"
import { useForm } from "react-hook-form"
import { Modal } from "@/components/ui/modal"
import { zodResolver } from "@hookform/resolvers/zod"
import useInviteModal from "@/hooks/use-invite-modal"
import { 
    Form, 
    FormControl, 
    FormDescription, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "@/components/ui/form"
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "../ui/select"
import { Button } from "@/components/ui/button"
import { roles } from "@/lib/data"

const formSchema = z.object({
    emails: z.array(
        z.object({
            id: z.string(),
            text: z.string()
        })
    ),
    role: z.string().min(1, { message: "Please select a role" })
})


export default function InviteMembersModal() {
    
    const [tags, setTags] = useState<Tag[]>([])
    const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emails: [],
            role: ""
        }
    })

    const inviteModal = useInviteModal()
    const { setValue } = form

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }
    
    return (
        <Modal
            isOpen={inviteModal.isOpen}
            onClose={inviteModal.onClose} 
            title="Invite members" 
            description="Invite new members to this organization"
        >  
            <Form {...form}>
                <form className="mt-5 space-y-8 flex flex-col items-start" onSubmit={form.handleSubmit(onSubmit)} >
                    <FormField
                        control={form.control}
                        name="emails"
                        render={({ field }) => (
                            <FormItem className="flex flex-col items-start w-full">
                                <FormLabel className="text-left text-sm font-normal">Email addresses</FormLabel>
                                <FormDescription className="text-left text-xs text-black/65">
                                    Enter or paste one or more email addresses, separated by spaces or commas
                                </FormDescription>
                                <FormControl className="flex-wrap">
                                    <TagInput
                                        className="shadow-none"
                                        activeTagIndex={activeTagIndex}
                                        setActiveTagIndex={setActiveTagIndex}
                                        tags={tags}
                                        setTags={(newTags) => { setTags(newTags); setValue('emails', newTags as [Tag, ...Tag[]])}}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem className="w-1/2">
                                <FormLabel className="text-left text-sm font-normal">Role</FormLabel>
                                <Select 
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                placeholder="Select an option"
                                                defaultValue={field.value}
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {roles.map(role => (
                                            <SelectItem 
                                                key={role.id} 
                                                value={role.id}
                                            >
                                                {role.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="w-full text-right">
                        <Button 
                            className="uppercase"
                            type="submit"
                            disabled={!tags.length}
                        >
                            Send Invitations
                        </Button>
                    </div>
                </form>
            </Form>
        </Modal>
    )
}